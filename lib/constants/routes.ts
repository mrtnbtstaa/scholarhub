export const routes = {
  student: {
    dashboard: "/student/dashboard",
    browseScholarships: "/student/browse-scholarships",
    savedScholarships: "/student/saved-scholarships",
    applications: "/student/my-applications",
  },
  admin: {
    dashboard: "/admin/dashboard",
    scholarships: "/admin/scholarships",
    editScholarship: "/admin/scholarships/edit",
    viewScholarship: "/admin/scholarships/view",
    providers: "/admin/providers",
    students: "/admin/students",
    // viewStudent: (id: string) => {
    //   return `/admin/students/${id}`
    // },
    // deleteStudent: (id: string) => {
    //   return `/admin/students/${id}`
    // },
    applications: "/admin/applications",
  },
};
