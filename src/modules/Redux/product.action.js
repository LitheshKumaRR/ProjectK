import axios from "axios";
const UPLOAD_REQUEST = "UPLOAD_REQUEST";
const UPLOAD_SUCCESS = "UPLOAD_SUCCESS";
const UPLOAD_FAILURE = "UPLOAD_FAILURE";

const LAPTOP_REQUEST = "LAPTOP_REQUEST";
const LAPTOP_SUCCESS = "LAPTOP_SUCCESS";
const LAPTOP_FAILURE = "LAPTOP_FAILURE";

let uploadProductAction = (product, history) => {
  console.log("Testing... @ Action page");
  return async (dispatch) => {
    try {
      dispatch({ type: UPLOAD_REQUEST });

     
      let response = await axios.post(
        `http://localhost:3000/products/upload`,
        JSON.stringify(product)
      );
      dispatch({ type: UPLOAD_SUCCESS, payload: response.data });
      history.push("/cart");
    } catch (err) {
      dispatch({ type: UPLOAD_FAILURE });
    }
  };
};
let getLaptopAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LAPTOP_REQUEST });
      let response = await axios.get(`http://localhost:3000/products/laptops`);
      dispatch({ type: LAPTOP_SUCCESS, payload: response.data });
    } catch (err) {
      dispatch({ type: LAPTOP_FAILURE });
    }
  };
};
export {
  uploadProductAction,
  getLaptopAction,
  UPLOAD_REQUEST,
  UPLOAD_SUCCESS,
  UPLOAD_FAILURE,
  LAPTOP_REQUEST,
  LAPTOP_SUCCESS,
  LAPTOP_FAILURE,
};