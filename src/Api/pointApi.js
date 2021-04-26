import requestHttp from './http';

export async function getCity() {
    const res = await requestHttp('city');
    return res;
}

export async function getPoint(id) {
    const res = await requestHttp(`point?cityId=${id}`);
    return res;
}

