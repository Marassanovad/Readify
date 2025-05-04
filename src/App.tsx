import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchResultsPage from "./pages/SearchResultsPage.tsx";
import FavoritesPage from "./pages/FavoritesPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
          <Header />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/search" element={<SearchResultsPage/>}/>
                    <Route path="/favorites" element={<FavoritesPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
            </main>
          <Footer />
        </div>
    );
}

export default App
