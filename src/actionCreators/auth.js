import RKunafa from "../RKunafa";

export const skipLogin = () => {
  return {
    type: "SKIP_LOGIN"
  };
};

const login = async (hostUrl, user) => {
  const response = await fetch(hostUrl + "/_session", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  if (response.status == 200) {
    return response.json();
  } else {
    console.log(response);
    throw new Error("Login Error");
  }
};

const fetchUser = async (hostUrl, user_id) => {
  const url = hostUrl + "/_users/" + user_id;
  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json"
    }
  });
  if (response.status == 200) {
    return response.json();
  } else {
    throw new Error("Request Error");
  }
};

const auth = async (name, password, hostUrl) => {
  const session = await login(hostUrl, {
    name,
    password
  });
  const userId = "org.couchdb.user:" + session.name;
  return await fetchUser(hostUrl, userId);
};

export const startLoading = () => {
  return {
    type: "START_LOADING"
  };
};

export const userLogin = (
  name,
  password,
  event,
  { actionCreators, HOST, SSL }
) => {
  const PROTCOL = SSL === "on" ? "https" : "http";
  return async dispatch => {
    dispatch({
      type: "START_LOADING"
    });
    try {
      const user = await auth(name, password, `${PROTCOL}://${HOST}`);
      RKunafa.login(name, password, user.profileId);
      if (event) {
        dispatch(event.action);
      } else {
        dispatch(
          actionCreators.fetchDoc({
            _id: user.profileId
          })
        );
      }
      dispatch({
        type: "LOGIN",
        profileId: user.profileId
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const userLogout = () => {
  return dispatch => {
    dispatch({
      type: "START_LOADING"
    });
    RKunafa.logout();
    dispatch({
      type: "LOGOUT"
    });
  };
};
