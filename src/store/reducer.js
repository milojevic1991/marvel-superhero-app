import * as actionType from './actions/actionType';

const initialState = {
   searchParam:'',
   marvelCharData:[],
   loading:false

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

      
      return{
         ...state,
         loading:true
      }

      case actionType.FETCH_START:
         return{
            ...state,
            loading:true
         }
      
      return{
         ...state,
         loading:true
      }


      case actionType.FETCH_SUCCESS:

         const updatedData = Object.values(action.payload).filter((item) => {
            
            if(item['description']){
               console.log('da vidimo jel prazan',item['description'].length);
               return true;
            } else return false;
         });
         console.log('updatedData',updatedData);
         // console.log(updatedData);
         return{
            ...state,
        
            //MORA DA IZBRISE STARI ARRAY I VRATI NOVI
            marvelCharData: updatedData,
            loading:false


         }

         case actionType.FETCH_ERROR:

         console.log(action.payload);
         
         return{
            ...state,
            loading:false
            // //MORA DA IZBRISE STARI ARRAY I VRATI NOVI
            // marvelCharData: state.marvelCharData.filter(action.payload)
         }

         case actionType.FETCH_EMPTY_STATE:

            const emptyArr = [];
            console.log('empty aray');
            return{
               ...state,
               marvelCharData:emptyArr,
               loading:false
              
            }
               
            
         
   
      default:
         return state;;
   }


}

