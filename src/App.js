
import { RouterProvider } from 'react-router';
import './App.css';
import routes from './Routes/Routes';

function App() {
  return (
    <div className="max-w-screen-xl border-2 mx-auto">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
