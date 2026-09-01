export const routes = {
  student: {
    root: "/student",
    onboarding: "/onboarding",
    dashboard: "/student/dashboard",
    browseScholarships: "/student/browse-scholarships",
    savedScholarships: "/student/saved-scholarships",
    applications: "/student/my-applications",
    documents: "/student/my-documents",
    calendar: "/student/calendar",
    profile: "/student/profile",
    settings: "/student/settings"
  },
  admin: {
    root: "/admin",
    dashboard: "/admin/dashboard",
    scholarships: "/admin/scholarships",
    editScholarship: "/admin/scholarships/edit",
    viewScholarship: "/admin/scholarships/view",
    providers: "/admin/providers",
    students: "/admin/students",            
    applications: "/admin/applications",
  },
  public:{
    login: "/login",
    register: "/register",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password"
  }
};
