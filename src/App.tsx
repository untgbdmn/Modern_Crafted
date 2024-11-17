import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import LayoutApp from "./pages/layout-app";
import Home from "./pages/home";
import AboutPage from "./pages/about-page";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SkillsPage from "./pages/skills-page";

export default function App() {
    AOS.init({
        duration: 500,
        easing: 'ease-in-out',
    });
    return (
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark">
            <LayoutApp>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/skill" element={<SkillsPage />} />
                </Routes>
            </LayoutApp>
        </ThemeProvider>
      </BrowserRouter>
    )
  }
