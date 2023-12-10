import { createBrowserRouter } from "react-router-dom";
import Login from '../components/Login';
import Home from '../components/Home';
import Informes from '../components/Informes';
import GesUser from '../components/GesUser';

const MainRouter = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'informes',
        element: <Informes />
      },
      {
        path: 'gesuser',
        element: <GesUser />
      }
    ]
  }
]);

export default MainRouter;