import axios from "axios";

export type NetworkAction = {
  type: string;
  method: "GET" | "POST";
  payload?: any;
  url: string;
};

export const GET_MEME  = () : NetworkAction => ({
  type: "GET_IMAGE",
  url: "https://dog.ceo/api/breeds/image/random",
  method: "GET",
});
export const init = () => (dispatch: any) => {``
  dispatch(GET_MEME());
};
