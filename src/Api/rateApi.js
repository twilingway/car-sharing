import requestHttp from './http';

export default async function getRate() {
    const res = await requestHttp('rate');
    return res;
}

