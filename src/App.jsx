import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { CssBaseline, CssVarsProvider, Box } from "@mui/joy";
import bgImg from "./media/3.png";

function App() {
  return (
    <CssVarsProvider>
      <CssBaseline>
        <BrowserRouter>
          <Box
            sx={{
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "fill",
              position: "absolute",
              left: "0",
              right: "0",
              top: "0",
              bottom: "0",
              zIndex: -1
            }}
          >
            <Box>
              <Header />
              <Routes>
                <Route exact path="/" element={<Home />} />
              </Routes>
              <Footer />
            </Box>
          </Box>
        </BrowserRouter>
      </CssBaseline>
    </CssVarsProvider>
  );
}

export default App;
