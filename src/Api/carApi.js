import requestHttp from './http';

export async function getCar() {
    const res = await requestHttp('car');
    return res;
}

export async function getCarByCategory(id) {
    const res = await requestHttp(`car?categoryId=${id}`);
    return res;
}

