
import { RouterProvider } from 'react-router';
import './App.css';
import routes from './Routes/Routes';

function App() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
