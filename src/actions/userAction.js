export const signIn = (user) => {
  return {
    type: "SIGN_IN",
    user,
  };
};
