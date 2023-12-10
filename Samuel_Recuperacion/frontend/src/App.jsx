import { RouterProvider } from 'react-router-dom';
import MainRouter from './routers/MainRouter';

export default function App() {
  return <RouterProvider router={MainRouter} />;
}
