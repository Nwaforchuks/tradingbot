 import Head from './Head'
 import Main from './Mains'
 import Footer from './Footers'
 import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
 import Howtouse from './Howtouse'
 import Register from './Register'
 import Login from './Login'
 import Howtodepo from './Howtodepo'
 import About from './about.js'
import Profile from './Profile'





function App() {

  
  return (
    
    <div className='w-full relative'>
    
      
      
      
      <Router>
      
      <Head/>
      <div className='mx-auto block pt-4'>
        <Routes>
        <Route index  element={<Main/>} />
        <Route exact  path="how" element={<Howtouse/>} />
        <Route exact  path="register" element={<Register/>} />
        <Route exact  path="login" element={<Login/>} />
        <Route exact  path="depositing" element={<Howtodepo/>} />
        <Route exact  path="about" element={<About/>} />
        <Route exact  path="profile" element={<Profile/>} />
        </Routes>
        </div>
      </Router>
      <Footer/>
     

    </div>
   
    
  );
}

export default App;
