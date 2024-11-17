import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import LayoutApp from "./pages/layout-app";
import Home from "./pages/home";

export default function App() {
    return (
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark">
            <LayoutApp>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </LayoutApp>
        </ThemeProvider>
      </BrowserRouter>
    )
  }
