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
  const { username } = useContext(AuthContext); 
  return (
     <Router>
       <Routes>
         <Route path = "/" element = { username ? <Home /> : <SignIn />} />
         <Route path = "/signIn" element = { username ? <Navigate  to = "/" /> : <SignIn />} />
         <Route path = "/signUp" element = { username ? <Navigate  to = "/" /> : <SignUp />} />
         <Route path = "/friend" element = { !username ? <Navigate  to = "/" /> : <Friend />} />
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
