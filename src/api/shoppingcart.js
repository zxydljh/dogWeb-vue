import request from "@/utils/request";

export const getListByUserId = (userId) => {
  return request({
    url: `/user/shoppingCart/list/${userId}`,
    method: "get"
  });
};

// 增加商品数量
export const incrementItemNumber = (userId, itemId) => {
  return request({
    url: `/user/shoppingCart/increment/${userId}/${itemId}`,
    method: "put"
  });
};

// 减少商品数量
export const decrementItemNumber = (userId, itemId) => {
  return request({
    url: `/user/shoppingCart/decrement/${userId}/${itemId}`,
    method: "put"
  });
};

// 删除购物车商品
export const deleteItem = (userId, itemId) => {
  return request({
    url: `/user/shoppingCart/delete/${userId}/${itemId}`,
    method: "delete"
  });
};

// 删除购物车选中的全部商品
export const deleteSelectedItem = (userId, itemIds) => {
  return request({
    url: `/user/shoppingCart/deleteSelectedItem/${userId}`,
    method: "delete",
    data: itemIds
  });
};

export const saveToShoppingCart = (data) => {
  return request({
    url: '/user/shoppingCart/saveItemToShoppingCart',
    method: 'post',
    data
  })
}
