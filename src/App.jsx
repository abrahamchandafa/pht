
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css';
import { CssBaseline, CssVarsProvider } from '@mui/joy';

function App() {
  return (
    <CssVarsProvider>
      <CssBaseline>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes> 
          </main>
          <Footer />
        </BrowserRouter>
      </CssBaseline>
  </CssVarsProvider>
  )
}

export default App
