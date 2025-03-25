import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import Signers from "../pages/Signers";

export default function SetUpRouter() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/signers" element={<Signers />} />
            </Routes>
        </div>
    );  
};

// export default SetUpRouter;