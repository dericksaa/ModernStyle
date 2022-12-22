import { HashRouter, Route, Routes } from 'react-router-dom';
import MakeUpPage from './MakeUp';
import Header from './Header'
import Footer from './Footer';
import SkinCare from './SkinCare';
import Navigation from './Navigation';



function App() {
  return (
    <>
    <HashRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<MakeUpPage/>}/>
          <Route path='/SkinCare' element={<SkinCare/>}/>
        </Routes>
      <Footer/>
      <Navigation/>
    </HashRouter>
    </>
  );
}

export default App;

