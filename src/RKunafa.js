import cacheStore from "./cacheStore";

const login = (username, password, profileId) => {
  return cacheStore.save("authCreds", {
    username,
    password,
    profileId
  });
};

const logout = (username, password, profileId) => {
  return cacheStore.delete("authCreds");
};

const getProfileId = () => {
  const authCreds = cacheStore.get("authCreds");
  return authCreds ? authCreds.profileId : undefined;
};

export default {
  login,
  logout,
  getProfileId
};
