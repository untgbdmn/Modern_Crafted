import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import LayoutApp from "./pages/layout-app";
import Home from "./pages/home";
import AboutPage from "./pages/about-page";

export default function App() {
    return (
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark">
            <LayoutApp>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </LayoutApp>
        </ThemeProvider>
      </BrowserRouter>
    )
  }
