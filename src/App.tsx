import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App;
