import request from 'umi-request';

const defaultData = {
  baseApplicationId: 74,
  baseOrgId: 1,
  baseOrgId: 1,
  current: 1,
  orderStatus: -1,
  orderType: 0,
};

function requestX(params) {
  const { url, method = 'post' } = params;
  return request(url, {
    method,
    credentials: 'include',
    'Content-Type': 'application/json',
    data: {
      ...defaultData,
      ...params.data,
    },
  });
}

export default requestX;
