import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import LayoutApp from "./pages/layout-app";
import Home from "./pages/home";
import AboutPage from "./pages/about-page";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PortoPage from "./pages/porto-page";
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
                    <Route path="/portofolio" element={<PortoPage />} />
                </Routes>
            </LayoutApp>
        </ThemeProvider>
      </BrowserRouter>
    )
  }
