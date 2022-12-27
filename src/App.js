import { HashRouter, Route, Routes } from 'react-router-dom';
import {MakeUpPage} from './MakeUpPage';
import Header from './Header'
import Footer from './Footer';
import SkinCare from './SkinCarePage';
import Start from './Start';
import {CartShop} from './CartShop';
import Nav from './Nav';
import { AppProvider } from './productStore';


function App() {
  return (
    <>
    <AppProvider>
    <HashRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Start/>}/>
          <Route path='/Shop' element={<CartShop/>}/>
          <Route path='/MakeUp' element={<MakeUpPage/>}/>
          <Route path='/SkinCare' element={<SkinCare/>}/>
        </Routes>
      <Footer/>
      <Nav/>
    </HashRouter>
    </AppProvider>
    </>
  );
}

export default App;

