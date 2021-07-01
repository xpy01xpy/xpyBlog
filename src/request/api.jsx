import requestX from './index';

export default function getOrders(payload) {
  const url = '/api/c/orderManage/getOrders';
  const params = {
    url,
    method: 'post',
    data: payload,
  };
  return requestX(params);
}
