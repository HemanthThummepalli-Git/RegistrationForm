
import { createBrowserRouter } from 'react-router-dom';
import Rootlayout from './compos/Rootlayout';
import Form from './compos/Form';
import UserProfile from './compos/UserProfile';
import { RouterProvider } from 'react-router-dom';
function App() {

let router=createBrowserRouter([
  {
    path:'',
    element:<Rootlayout/>,
    children:[
      {
        path:'',
        element:<Form/>
      },{
        path:'/userprofile',
        element:<UserProfile/>
      }
    ]
  }
])
  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
