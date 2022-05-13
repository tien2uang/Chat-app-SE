import SignIn from './pages/signIn/signIn';
import SignUp from './pages/signUp/signUp';
import Home from './pages/home/home';
import Friend from './pages/friendPage/friend';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/friend" element={<Friend />} />
      </Routes>
    </Router>
  );
}

export default App;
