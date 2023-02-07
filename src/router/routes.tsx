import Home from '../pages/Home';
import MainLayout from '../modules/layouts/MainLayout';

const Routes = [
  {
    path: '/',
    exact: true,
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
];

export default Routes;
