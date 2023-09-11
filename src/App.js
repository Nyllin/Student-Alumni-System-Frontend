import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/user/Home'
import Footer from './components/Footer';
import StudentLogin from './pages/student/StudentLogin';
import AlumniLogin from './pages/alumni/AlumniLogin';
import AlumniRegister from './pages/alumni/AlumniRegister';
import Blog from './pages/user/Blog';
import About from './pages/About';
import StudentHome from './pages/student/StudentHome';
import BlogCard from './components/BlogCard';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* Before login */}
        <Route path='/' element={<Home/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/blogs/:id' element={<BlogCard/>}/>
        <Route path='/about' element={<About/>}/>
       
        {/* student */}
        <Route path='/students/:id' element={<StudentHome/>}/>
        <Route path='/students/login' element={<StudentLogin/>}/>
        <Route path='/students/about' element={<About/>}/>

        {/* alumni */}
        <Route path='/alumnis/register' element={<AlumniRegister/>}/>
        <Route path='/alumnis/login' element={<AlumniLogin/>}/>   
        <Route path='/alumnis/about' element={<About/>}/>

      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;







