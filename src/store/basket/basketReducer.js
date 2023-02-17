import { fetchAPI } from "../../lib/fetchApi";

export const basketActionTypes = {
  ADD_ITEM_SUCCES: "ADD_ITEM_SUCCES",
  GET_BUSKET_SUCCESSS: "GET_BUSKET_SUCCESSS",
};

const initialState = {
  items: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case basketActionTypes.GET_BUSKET_SUCCESSS:
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default basketReducer;

export const getBasket = () => async (dispatch) => {
  try {
    const { data } = await fetchAPI("basket");

    dispatch({
      type: basketActionTypes.GET_BUSKET_SUCCESSS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addToBasket = (newItem) => async (dispatch) => {
  try {
    await fetchAPI(`foods/${newItem.id}/addToBasket`, {
      method: "POST",
      body: { amount: newItem.amount },
    });
    dispatch(getBasket());
  } catch (error) {
    console.log(error);
  }
};

export const updateBasketItem =
  ({ id, amount }) =>
  async (dispatch) => {
    try {
      await fetchAPI(`basketItem/${id}/update`, {
        method: "PUT",
        body: { amount },
      });
      dispatch(getBasket());
    } catch (error) {
      console.log(error);
    }
  };
export const deleteBasketItem = (id) => async (dispatch) => {
  try {
    await fetchAPI(`basketItem/${id}/delete`, {
      method: "DELETE",
    });
    dispatch(getBasket());
  } catch (error) {
    console.log(error);
  }
};
