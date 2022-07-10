import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import React, {useState} from "react";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState('About');
 

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  
  return (
    <div className="App">
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
    <main >
      {renderPage()}
    </main>
      <Footer/>
    </div>
  );
}

export default App;
