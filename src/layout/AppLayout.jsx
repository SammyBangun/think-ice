import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";

function Layout() {
    return (
        <>
            <Navbar />
            <Box>
                <Outlet />
            </Box>
            <Footer />
        </>
    );
}

export default Layout;
