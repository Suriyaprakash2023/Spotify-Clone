export const initialState = {
  user:null,
  playlist:[],
  playing:false,
  item:null,
  token:null,
}

const reducer = (state,action) =>{

  // the action have Two Types  Action ==> type , [playload]

  switch(action.type){
    case 'SET_USER':
      return {
         ...state,
         user:action.user,
        };
    
    case 'SET_TOKEN':
      return {
        ...state,
        user : action.token ,
      };
    
    default:
      return state;
  }
}

export default reducer;