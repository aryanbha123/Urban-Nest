import { Suspense , lazy} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';
import Loader from './components/Loader';
import Properties from './pages/Properties';

const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/properties' element={<Properties />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </Suspense>

    </>
  );
}

export default App;
