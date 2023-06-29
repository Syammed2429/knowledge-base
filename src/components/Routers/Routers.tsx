import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Navbar } from "../Navbar/Navbar";

export const Routers = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </>
    );
}