import requestHttp from './http';

export default async function getCategory() {
    const res = await requestHttp('category');
    return res;
}
