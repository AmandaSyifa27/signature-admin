import { useEffect } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Content from "../components/Content";
import Footer from "../components/Footer";

const HomePage = () => {
    // useEffect(() => {});

    return (
        <div className="home-page">
            <Header />
            <Menu />
            <Content />
            <Footer />
        </div>
    )
};

export default HomePage;