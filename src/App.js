import logo from './logo.svg';
import './App.css';
import './styles/main.css'
import './styles/vendor.css'
// import './scripts/main'
// import './scripts/plugins'
// import './scripts/vendor'
import { Router, Routes, Route } from 'react-router-dom';
import AppRoutes from './Router';

import { gql, useQuery } from '@apollo/client';
import Sermons from './Sermons';
import ContactPage from './contact_us';
import HomePage from './HomePage';
import Aboutus from './Aboutus';
import EventPage from './event';
import Gallery from './gallery';
const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      slug
    }
  }
`;
const App = () => {


  return (
    <>
    <div className="App">
      <Routes>
      {AppRoutes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
      </Routes>
     </div> 
    </>
  );
};




export default App;
