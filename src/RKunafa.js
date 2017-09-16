import cacheStore from './cacheStore';

export const login = (username, password, profileId) => {
  return cacheStore.save("authCreds", {
    username,
    password,
    profileId
  });
}

export const logout = (username, password, profileId) => {
  return cacheStore.delete("authCreds");
}

export const getProfileId = () => {
  const authCreds = cacheStore.get("authCreds");
  return authCreds ? authCreds.profileId : undefined;
}
