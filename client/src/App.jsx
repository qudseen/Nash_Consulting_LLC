import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Employers from './pages/Employers';
import JobSeekers from './pages/JobSeekers';
import Insights from './pages/Insights';
import Header from './components/Header';

export default function App(){
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/sign-in" element={<SignIn />}/>
    <Route path="/sign-up" element={<SignUp />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/profile" element={<Profile />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/employers" element={<Employers />}/>
    <Route path="/jobseekers" element={<JobSeekers />}/>
    <Route path="/insights" element={<Insights />}/>
  </Routes>
  </BrowserRouter>
}