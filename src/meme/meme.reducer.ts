export type State = {
  data: {
    message:string,
    status: string
  }
}


const initialState: State = {
 data: {
  message: "message init",
  status:"status init"
 }
}

export  const memeReducer = (state = initialState, action:any) => {
  
  switch (action.type) {
   
  case "GET_IMAGE":
    console.log({...state, data: action.payload})
    return {...state,data: action.payload};

  default:
    return state
  }
};
