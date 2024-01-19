


import './App.css';
import AboutUs from './pages/AboutUs';
import Apply from './pages/Apply';
import Home from './pages/Home';
import MyFooter from './pages/MyFooter';
import NavigationBar from './pages/NavigationBar';
import Work from './pages/Work';

function App() {
  return (
    <div className="App">
    <NavigationBar/>
    <Home/>
    <AboutUs/>
    <Work/>
    <Apply/>
    <MyFooter/>


    </div>
  );
}

export default App;
