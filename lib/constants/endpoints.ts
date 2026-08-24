const createApiPath = (module: string) => (endpoint: string) => 
  endpoint ? `v1/${module}/${endpoint}/` : `v1/${module}/`;

  const authPath = createApiPath("auth");
  const calendarPath = createApiPath("calendar")

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
      calendar_event: {
        calendar: "calendar",
      }
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
      calendar_event: {
        calendar: calendarPath(""),
      }
    },
  } as const;
