import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routes/root';
import ErrorPage from "./ErrorPage";
import Book from "./routes/book";
import Library, { libraryLoader } from "./routes/library";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/library',
          element: <Library />,
          loader: libraryLoader,
        },
        {
          path: '/book/:bookId',
          element: <Book />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;