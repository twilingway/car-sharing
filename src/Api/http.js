// const base = btoa('5e25c641099b810b946c5d5b:4cbcea96de');

const headersConfig = {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    // Authorization: `Basic ${base}`,
    // 'Content-type': 'application/json',
};

async function requestHttp(url, method = 'GET', body = null, headers = headersConfig || {}) {


    let newBody = body;
    const newHeader = headers;
    if (newBody) {
        newBody = JSON.stringify(newBody);
        newHeader['Content-Type'] = 'application/json';
    }
    const response = await fetch(url, {
        method,
        body: newBody,
        headers: newHeader,
    });

    const data = await response.json();


    if (!response.ok) {
        throw new Error(data.message || 'Something wrong...');
    }
    return data;
}

export default requestHttp;
