import requestHttp from './http';

export default async function getRateType() {
    const res = await requestHttp('rateType');
    return res;
}


