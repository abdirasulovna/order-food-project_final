import { fetchAPI } from "../../lib/fetchApi";

export const mealsActionTypes = {
  GET_MEALS_SUCCESS: "GET_MEALS_SUCCESS",
  GET_MEALS_STARTED: "GET_MEALS_STARTED",
  GET_MEALS_FAILED: "GET_MEALS_FAILED",
};

const initialState = {
  meals: [],
  isLoading: false,
  error: "",
};

const MealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case mealsActionTypes.GET_MEALS_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case mealsActionTypes.GET_MEALS_SUCCESS:
      return {
        ...state,
        meals: action.payload,
        isLoading: false,
        error: "",
      };
    case mealsActionTypes.GET_MEALS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default MealsReducer;

export const getMeals = () => async (dispatch) => {
  try {
    dispatch({ type: mealsActionTypes.GET_MEALS_STARTED });

    const { data } = await fetchAPI("foods");

    dispatch({
      type: mealsActionTypes.GET_MEALS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: mealsActionTypes.GET_MEALS_FAILED,
      payload: "Failed to load meals",
    });
  }
};
