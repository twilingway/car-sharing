import requestHttp from './http';


export async function getOrderById(id) {
    const res = await requestHttp(`order/${id}`);
    return res;
}

export async function getAllOrders() {
    const res = await requestHttp('order');
    return res;
}

export async function orderPut(body) {
    const res = await requestHttp(`order/${body.id}`, 'PUT', body);
    return res;
}


export default async function orderPost(body) {
    const res = await requestHttp('order', 'POST', body);
    return res;
}

