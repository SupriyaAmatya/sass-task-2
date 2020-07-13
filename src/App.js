import React from 'react';
import './assets/sass/style.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
