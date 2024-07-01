import { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';

const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <Header />
          </Suspense>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
          <Suspense fallback={<Loader />}>
            <Footer />
          </Suspense>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
