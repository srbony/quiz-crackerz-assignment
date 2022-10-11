
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Blog from './Components/Blog/Blog';
import Question from './Components/Question/Question';
import Statistics from './Components/Statistics/Statistics';
import Topics from './Components/Topics/Topics';
import Main from './Layout/Main';
// import Blog from './Components/Blog/Blog';


// import Statistics from './Components/Statistics/Statistics';
// import Topics from './Components/Topics/Topics';
// import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/topics', element: <Topics></Topics>
        },

        {
          path: '/',

          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),

          element: <Topics></Topics>
        },
        { path: '/topics', element: <Topics></Topics> },
        {
          path: '/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),

          element: <Statistics></Statistics>
        },
        { path: '/blog', element: <Blog></Blog> },
        {
          path: '/topic/:id',

          loader: async ({ params }) => {
            // console.log(params.id)
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },

          element: <Question></Question>
        }



      ]
    }




  ])


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
