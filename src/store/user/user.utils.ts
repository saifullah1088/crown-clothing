export const transformUser = (
  user: any
): {
  uid: string;
  email: string;
  displayName: string;
  token: string;
} | null => {
  if (!user) return user;

  const { uid, email, displayName, stsTokenManager } = user;
  const token = stsTokenManager?.accessToken;

  return { uid, email, displayName, token };
};
