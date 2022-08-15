

import './app.css';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import Home from "./pages/home";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <Sidebar />
         {/* <div className='others'>
        <Navbar /> 
          other pages
        </div>  */}
        <Home/>
        
      </div>
    </>
  );
}

export default App;
