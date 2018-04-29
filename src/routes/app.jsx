import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import {
  Dashboard,
  Person,
  ContentPaste
} from "material-ui-icons";

const appRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Visitor List",
    icon: Dashboard,
    component: TableList
  },
  {
    path: "/user",
    sidebarName: "Add Visitor",
    navbarName: "Add New Visitor",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/report",
    sidebarName: "Report",
    navbarName: "Report",
    icon: ContentPaste,
    component: DashboardPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default appRoutes;
