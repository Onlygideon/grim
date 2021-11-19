import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Routes } from './components/Routes'

import { ResultContextProvider } from "./contexts/ResultContextProvider";


function App() {
  const [darkMode, setDarkMode] = useState(false)


  return (
    <ResultContextProvider>
        <Router>

          <div className={darkMode ? 'dark' : ''}>
            <div className="bg-gray-200 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
              <Routes />
              <Footer />
            </div>
          </div>

        </Router>
    </ResultContextProvider>  
  );
}

export default App;
