import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { Box } from "@mui/joy";
import bgImg from "./media/1.png";

function App() {
  return (
        <BrowserRouter>
          <Box
            sx={{
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover",
              width: "100%",
              left: "0",
              right: "0",
              top: "0",
              bottom: "0",
              zIndex: -1,
              backgroundRepeat: 'no-repeat',
              WebkitBackgroundSize: 'cover', // For Safari support
              mozBackgroundSize: 'cover',    // For Firefox support
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
  );
}

export default App;
