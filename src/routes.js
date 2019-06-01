/* eslint-disable react/react-in-jsx-scope */
// import HomePage from "./pages/HomePage/HomePage";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import UserListPage from "./pages/UserListPage/UserListPage";
// import UserActionPage from "./pages/UserActionPage/UserActionPage";
import DriversListPage from "./pages/DriversListPage/DriversListPage";
// import LogInPage from "./pages/LogInPage/LogInPage";

// const routes = [
//   {
//     path: '/',
//     exact : true,
//     main: HomePage
//   },
//   {
//     path: '/user-list',
//     exact : false,
//     main: UserListPage
//   },
//   {
//     path: '/user/add',
//     exact : false,
//     main: ({history}) => <UserActionPage history={history}/>
//   },
//   {
//     path:'/user/:id/edit',
//     exact: false,
//     main: ({match}) => <UserActionPage match={match}/>
//   },
//   {
//     main: NotFoundPage
//   },

// ];

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    // component: Dashboard,
    layout: "/admin"
  },{
    path: "/users",
    name: "Users",
    icon: "pe-7s-user",
    component: UserListPage,
    layout: "/admin"
  },{
    path: "/drivers",
    name: "Drivers",
    icon: "pe-7s-note2",
    component: DriversListPage,
    layout: "/admin"
  },{
    path: "/orders",
    name: "Orders",
    icon: "pe-7s-cash",
    // component: Maps,
    layout: "/admin"
  },{
    path: "/maps",
    name: "Map",
    icon: "pe-7s-map-marker",
    // component: Maps,
    layout: "/admin"
  },
];
export default dashboardRoutes;