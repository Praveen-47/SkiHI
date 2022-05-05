const initialState = {
  loading: false,
  totalSupply: 0,
  publicCost: 0,
  whiteListCost: 0,
  error: false,
  errorMsg: "",
  publicSale: false,
  whiteListSale: false,
  salePaused: true,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        totalSupply: action.payload.totalSupply,
        publicCost: action.payload.publicCost,
        whiteListCost: action.payload.whiteListCost,
        publicSale: action.payload.publicSale,
        whiteListSale: action.payload.whiteListSale,
        salePaused: action.payload.salePaused,
        error: false,
        errorMsg: "",
      };
    case "CHECK_DATA_FAILED":
      return {
        ...initialState,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
