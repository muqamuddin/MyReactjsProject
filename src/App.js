
import React from 'react';
import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './admin/Dashboard';
import Test from './admin/test';
import Home from './frontend/Pages/Home';
import About from './frontend/Pages/About';
import Service from './frontend/Pages/Service';
import Contact from './frontend/Pages/contact';
import Team from './frontend/Pages/Team';
import FAQs from './frontend/Pages/FAQs';
import Project from './frontend/Pages/Project';
import CardSlid from './frontend/component/CardSlid';
import ProjectDetails from './frontend/Pages/ProjectDetails';
import ServiceDetails from './frontend/Pages/ServiceDetails';

function App() {
  return (
<div >
  <BrowserRouter>
            <Routes>
              {/* this is the Web Roust */}
              <Route path="/" Component={Home} /> 
              <Route path="/admin/about/about" Component={About} /> 
              <Route path="/service" Component={Service} />
              <Route path='/project' Component={Project} />
              <Route path="/contact" Component={Contact} />
              <Route path="/team" Component={Team} />
              <Route path="/faqs" Component={FAQs} />
              {/* //Dashboard Routs       */}
               <Route  path="/admin/dashboard" Component={Dashboard} />    
               <Route path="/admin/test" Component={Test} /> 
               <Route path="/CardSlid" Component={CardSlid} />
               <Route path="/projectdetail/:id" Component={ProjectDetails} />
               <Route path="/servicedetails/:id" Component={ServiceDetails} />
               {/* <Route  path="*" element={<div>Not Found Your Path You Search</div>} />     */}
               <Route  path="*" element={<Navigate to='/'/>} />    
            </Routes>
  </BrowserRouter>
</div> 
  );
}
export default App;
