export const transformUser = (user) => {
  if (!user) return user;

  const { uid, email, displayName, stsTokenManager } = user;
  const token = stsTokenManager?.accessToken;

  return { uid, email, displayName, token };
};
