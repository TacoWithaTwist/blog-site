import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Posts from './pages/Posts';
import Create from './pages/Create';
import UPost from './pages/UPost';
const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/signup',
      element: <Signup />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/posts',
      element: <Posts />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/create',
      element: <Create />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/posts/:postid',
      element: <UPost />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
