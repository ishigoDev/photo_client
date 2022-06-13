import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import {Routes, Route} from "react-router-dom";
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Quotes from './components/Quotes/Quotes.js';
import Admin from './components/Admin/Admin.js';
import React  from 'react';
import { PrivateRoute , LogRoute } from './privateRoute/PrivateRoute.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import AdminHeader from './components/Header/AdminHeader.js';
import AdminQuotes from './components/Quotes/AdminQuotes.js';
import SingleQuotes from './components/Quotes/SingleQuotes.js';
import CategoryFrontend from './components/Portfolio/CategoryFrontend.js';
import Gallery from './components/Gallery/Gallery.js';
function Main() {  
  return (
    <>      
        <Routes>
          <Route path='/' exact element={<><Header/><Home/><Footer /></>} />        
          <Route path='/about' exact element={<><Header/><About/><Footer /></>} />        
          <Route path='/portfolio' exact element={<><Header/><CategoryFrontend/><Footer /></>} />        
          <Route path='/portfolio/:category' element={<><Header/><Gallery /><Footer /></>} />        
          <Route path='/admin-access' exact element={<><Header/>
            <LogRoute>
              <Admin/>            
            </LogRoute><Footer /></>
          } />                
          <Route path="/admin-dashboard" element={<><AdminHeader />
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute></>
          }></Route>
          <Route path="/quotes-directory" element={<><AdminHeader />
            <PrivateRoute>
              <AdminQuotes />
            </PrivateRoute></>
          }></Route>
          <Route path="/quote/:id" element={<><AdminHeader />
            <PrivateRoute>
              <SingleQuotes />              
            </PrivateRoute></>
          }></Route>
          <Route path='/contact' exact element={<><Header/><Contact/><Footer /></>} />        
          <Route path='/get-quotes' exact element={<><Header/><Quotes/><Footer /></>} />        
        </Routes>              
    </>    
  );
}

export default Main;
