const axios = require('axios');

// TODO для админки
// const base = btoa('5e25c641099b810b946c5d5b:4cbcea96de');

const headersConfig = {
    'X-Api-Factory-Application-Id': process.env.REACT_APP_X_API_FACTORY_KEY,
    // TODO для админки
    // Authorization: `Basic ${base}`,
};

async function requestHttp(url, method = 'GET', body = null, headers = headersConfig || {}) {
    let newBody = body;
    const newHeader = headers;
    if (newBody) {
        newBody = JSON.stringify(newBody);
        newHeader['Content-Type'] = 'application/json';
    }

    const res = await axios({
        url: `${process.env.REACT_APP_API_URL}${url}`,
        method,
        headers,
        data: newBody
    });
    return res.data;
}

export default requestHttp;

