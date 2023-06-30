import { Route, Routes } from "react-router-dom";
import { AboutSection } from "../AboutSection/AboutSection";
import { Home } from "../Home/Home";
import { Navbar } from "../Navbar/Navbar";

export const Routers = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about/:id' element={<AboutSection />} />
            </Routes>
        </>
    );
}