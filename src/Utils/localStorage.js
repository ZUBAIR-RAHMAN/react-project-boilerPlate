// Get access token from localstorage
const getAccessToken = () => {
  const state = JSON.parse(localStorage.getItem("__tkn__sts") ?? "{}");
  return state["__a__t"];
};

// Set access token to localstorage
const setAccessToken = (__a__t) => {
  if (__a__t) {
    const state = JSON.parse(localStorage.getItem("__tkn__sts") ?? "{}");
    const newState = {
      ...state,
      __a__t,
    };

    // mutate local storage state
    localStorage.setItem("__tkn__sts", JSON.stringify(newState));
  }
};

// Get refresh token from localstorage
const getRefreshToken = () => {
  const state = JSON.parse(localStorage.getItem("__tkn__sts") ?? "{}");
  return state["__r__t"];
};

// Set refresh token to localstorage
const setRefreshToken = (__r__t) => {
  if (__r__t) {
    const state = JSON.parse(localStorage.getItem("__tkn__sts") ?? "{}");
    const newState = {
      ...state,
      __r__t,
    };

    // mutate local storage state
    localStorage.setItem("__tkn__sts", JSON.stringify(newState));
  }
};

// Remove access token and refresh token from localstorage
const removeTokens = () => {
  localStorage.setItem("__tkn__sts", JSON.stringify({}));
};

export {
  setAccessToken,
  setRefreshToken,
  getAccessToken,
  getRefreshToken,
  removeTokens,
};
