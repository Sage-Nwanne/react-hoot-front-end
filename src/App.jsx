import { useContext, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';

//Fetched Routes:
import * as hootService from './services/hootService';


//Components:
import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import HootList from './components/HootList/HootList';
import HootDetails from './components/hootDetails/hootDetails';

//Contexts:
import { UserContext } from './contexts/UserContext';



const App = () => {
  //Use variables
  const [hoots, setHoots] = useState([]);
  const {user} = useContext(UserContext);
  
  useEffect(()=> {
    const fetchAllHoots = async () => {
      const hootsData = await hootService.index();

      setHoots(hootsData);
    }

    if (user) fetchAllHoots()

  }, [user]);







  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        { user ? (
          <>
          <Route path='/hoots' element={<HootList hoots={hoots} />} />
          <Route path='/hoots/:hootId' element={<HootDetails />} />
          </>
        ) : (
          <>
          <Route path='/sign-up' element={<SignUpForm />} />
          <Route path='/sign-in' element={<SignInForm />} />
          </>
      )}
      </Routes>
    </>
  );
};

export default App;
