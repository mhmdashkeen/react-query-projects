import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ApplicationNavigation from './ApplicationNavigation';
import TodoIndex from './TodosApp';
import MixMasterIndex from './MixMaster/MainComponent';
import { About, Cocktail, Landing, Newsletter, Error, SinglePageError } from './MixMaster/pages';
import { loader as landingLoader } from './MixMaster/pages/Landing';
import { loader as cocktailLoader } from './MixMaster/pages/Cocktail';
import { action as formAction } from './MixMaster/pages/Newsletter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ApplicationNavigation />,
    errorElement: <Error />,
    children: [
      {
        path: "mix-master",
        element: <MixMasterIndex />,
        children: [
          {
            index: true,
            loader: landingLoader,
            errorElement: <SinglePageError />,
            element: <Landing />
          },
          {
            path: "about",
            element: <About />
          },
          {
            path: "cocktail/:id",
            errorElement: <SinglePageError />,
            loader: cocktailLoader,
            element: <Cocktail />
          },
          {
            path: "newsletter",
            element: <Newsletter />,
            action: formAction
          }
        ]
      },
      {
        index: true,
        element: <TodoIndex />
      }
    ]
  }
])
const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};
export default App;
