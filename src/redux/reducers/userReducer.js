import jwt from "jsonwebtoken";
import { isValidToken } from "../../utils/validateToken";

import {
  SIGN_IN_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
} from "../actionTypes/userTypes";

const initState = {
  currentUser: localStorage.getItem("USER-TOKEN")
    ? isValidToken(localStorage.getItem("USER-TOKEN"))
    : null,
  token: localStorage.getItem("USER-TOKEN")
    ? localStorage.getItem("USER-TOKEN")
    : null,
  error: "",
  loading: false,
  isAuthenticated: false,
};

const userReducer = (state = initState, action) => {
  const { type, payload } = action;
  const { currentUser, token, error } = state;

  switch (type) {
    case SIGN_IN_REQUEST:
    case SIGN_UP_REQUEST:
    case SIGN_OUT_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    case SIGN_IN_FAILURE:
    case SIGN_UP_FAILURE:
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: error,
        currentUser: null,
        isAuthenticated: false,
      };
    case SIGN_UP_SUCCESS:
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: token,
        currentUser: currentUser,
        isAuthenticated: true,
      };
    case SIGN_OUT_SUCCESS:
      localStorage.removeItem("USER-TOKEN");
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        currentUser: null,
        token: "",
      };
    default:
      return { ...state };
  }
};

export default userReducer;
