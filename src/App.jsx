
// import  style from './App.module.css'
// import About from './components/About'
// import Contact from './components/Contact'
// import Experience from './components/Experience'
// import Hero from './components/Hero'
// import NavBar from './components/NavBar'
// import Projects from './components/Projects'

// function App() {

//   return (

//     <div className={style.App}>
//      <NavBar/>
//      <Hero/>
//      <About/>
//      <Experience/>
//      <Projects/>
//      <Contact/>
//     </div>
   
//   )
// }

// export default App

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import style from './App.module.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Form from './components/Form'; // Import the Form component

function AppContent() {
  const location = useLocation(); // Get the current path

  return (
    <div className={style.App}>
      {location.pathname !== '/form' && <NavBar />} {/* Conditionally render NavBar */}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;