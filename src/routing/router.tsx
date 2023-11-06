import { createBrowserRouter } from "react-router-dom";
import PageRoot from "../pages/pageRoot";
import App from "../App";
import PageError from "../pages/pageError";
import PageTaouaf from "../pages/pageTaouaf";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageRoot />,
    errorElement: <PageError />,

    
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "taouaf",
        element: <PageTaouaf />,
      },
    ],
  },
]);
