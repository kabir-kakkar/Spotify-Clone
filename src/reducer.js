export const initialState = {
    user: null,
    token: "BQAAEmgn0t2DNC0p71cZqxfHctg4D2MzV4Kdn14dtzJG0Iodv4UyVVouxmlegR4mvmCAKCB1CuBKK6sPGQw8L9a8GHGKa-iK6SEfaW-m7X0pPUq53PUNiIMGUqhVI0rsEsqAf2_KLiBgYC2sh1EaHe-7HBRQoihOKVcz4SnKzpLsxL9f", // Undo this to Null afterwards
    playlists: [],
    playing: false,
    item: null,
  };
  
  const reducer = (state, action) => {
    console.log(action);
  
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
      case "SET_TOKEN":
        return {
          ...state,
          token: action.token,
        };
      case "SET_PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
      default:
        return state;
    }
  };
  
  export default reducer;