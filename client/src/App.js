import SignIn from './components/signIn/signIn';
import SignUp from './components/signUp/signUp';
import Home from './components/home/home';
import Friend from './components/friendPage/friend';
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
