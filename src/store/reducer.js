import * as actionType from "./actions/actionType";

const initialState = {
  searchParam: "",
  marvelCharData: [],
  marvelSingleHero: [],
  loading: false,
  inputLength: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SEARCH_INPUT:
      console.log("klik");
      return {
        ...state,
        searchParam: action.payload,
      };

    case actionType.FETCH_DATA:
      return {
        ...state,
        loading: true,
      };

    case actionType.FETCH_START:
      return {
        ...state,
        loading: true,
      };

    case actionType.FETCH_SUCCESS:
      const updatedData = Object.values(action.payload).filter((item) => {
        if (item["description"]) {
          return true;
        } else return false;
      });
      return {
        ...state,

        //MORA DA IZBRISE STARI ARRAY I VRATI NOVI
        marvelCharData: updatedData,
        loading: false,
        inputLength: action.inputLength,
      };

    case actionType.FETCH_ERROR:
      console.log(action.payload);

      return {
        ...state,
        loading: false,
        // //MORA DA IZBRISE STARI ARRAY I VRATI NOVI
        // marvelCharData: state.marvelCharData.filter(action.payload)
      };

    case actionType.FETCH_EMPTY_STATE:
      const emptyArr = [];
      console.log("empty aray");
      return {
        ...state,
        marvelCharData: emptyArr,
        loading: false,
      };

    case actionType.READ_MORE_BTN_HANDLER:
      const updatedArr = state.marvelCharData
        .filter((el) => {
          return el.id === action.payload;
        })
        .map((el) => {
          return {
            id: el.id,
            name: el.name,
            description: el.description,
            thumbnail: el.thumbnail.path,
            comics: el.comics.available,
            series: el.stories.available,
            stories: el.stories.available,
            urls: el.urls.map((urls) => urls.url),
          };
        });

      return {
        ...state,
        marvelSingleHero: updatedArr,
      };

    default:
      return state;
  }
};
