const createApiPath = (module: string) => (endpoint: string) => `v1/${module}/${endpoint}/`;

const authPath = createApiPath("auth");

export const ENDPOINTS = {
  server: {
    auth: {
      register: "register",
      login: "login",
      logout: "logout",
      refreshToken: "refresh",
      forgotPassword: "forgot-password",
      resetPassword: "reset-password",
    },
  },
  client: {
    auth: {
      register: authPath("register"),
      login: authPath("login"),
      logout: authPath("logout"),
      refreshToken: authPath("refresh"),
      forgotPassword: authPath("forgot-password"),
      resetPassword: authPath("reset-password"),
    },
  },
};
