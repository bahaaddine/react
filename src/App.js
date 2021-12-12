import './App.css';

import Form from './components/Form/Form';
import Layouts from './components/layouts/Layouts';
import Mainpage from './components/mainpage/Mainpage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">

      
      <Navbar />
      <Mainpage />
      <Layouts />
      <Form />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
