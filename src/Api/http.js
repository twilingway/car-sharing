// const base = btoa('5e25c641099b810b946c5d5b:4cbcea96de');

const headersConfig = {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    // Authorization: `Basic ${base}`,
    // 'Content-type': 'application/json',
};

async function requestHttp(url, method = 'GET', body = null, headers = headersConfig || {}) {


    let newBody = body;
    const newHeader = headers;
    console.log('newBody :>> ', newBody);
    if (newBody) {
        newBody = JSON.stringify(newBody);
        console.log('newBody2 :>> ', newBody);
        newHeader['Content-Type'] = 'application/json';
    }
    const response = await fetch(url, {
        method,
        body: newBody,
        headers: newHeader,
        // data: { username: 'intern', password: 'intern-S!' }
    });

    const data = await response.json();
    console.log('data2 :>> ', data);

    if (!response.ok) {
        throw new Error(data.message || 'Something wrong...');
    }
    return data;
}

export default requestHttp;
