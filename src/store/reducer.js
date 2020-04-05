import * as actionType from './actions/actionType';

const initialState = {
   searchParam:'',
   marvelCharData:[]

}

export const reducer = (state= initialState,action) => {
   switch (action.type) {

      case actionType.SEARCH_INPUT:

      console.log('klik');
      return{
         ...state,
         searchParam:action.payload
      }

      case actionType.FETCH_DATA:

      console.log('pocelo fetchovanje');
      return{
         ...state
      }

      case actionType.FETCH_SUCCESS:

         const updatedData = Object.values(action.payload);
         return{
            ...state,

            //MORA DA IZBRISE STARI ARRAY I VRATI NOVI
            marvelCharData: updatedData
         }

         case actionType.FETCH_ERROR:

         console.log(action.payload);
         
         return{
            ...state,
            // //MORA DA IZBRISE STARI ARRAY I VRATI NOVI
            // marvelCharData: state.marvelCharData.filter(action.payload)
         }

         case actionType.FETCH_EMPTY_STATE:

            const emptyArr = [];
            console.log('empty aray');
            return{
               ...state,
               marvelCharData:emptyArr
              
            }
               
            
         
   
      default:
         return state;;
   }


}

