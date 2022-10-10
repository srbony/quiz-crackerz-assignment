
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Statistics from './Components/Statistics/Statistics';
import Topics from './Components/Topics/Topics';
import Main from './Layout/Main';

function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [

        { path: '/', element: <Topics></Topics> },
        { path: '/topics', element: <Topics></Topics> },
        { path: '/statistics', element: <Statistics></Statistics> },
        { path: '/blog', element: <Blog></Blog> }
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
