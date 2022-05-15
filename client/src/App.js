import SignIn from './pages/signIn/signIn';
import SignUp from './pages/signUp/signUp';
import Home from './pages/home/home';
import Friend from './pages/friendPage/friend';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Navigate
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';


function App() {
  const { user } = useContext(AuthContext); 
  return (
     <Router>
       <Routes>
         <Route path = "/" element = { user ? <Home /> : <SignIn />} />
         <Route path = "/signIn" element = { user ? <Navigate  to = "/" /> : <SignIn />} />
         <Route path = "/signUp" element = { user ? <Navigate  to = "/" /> : <SignUp />} />
         <Route path = "/friend" element = { !user? <Navigate  to = "/" /> : <Friend />} />
       </Routes>
     </Router>
    // <Router>
    //    <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/signIn" element={<SignIn />} />
    //     <Route path="/signUp" element={<SignUp />} />
    //     <Route path="/friend" element={<Friend />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
