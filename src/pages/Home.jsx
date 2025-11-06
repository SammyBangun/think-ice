import {
    Box,
}
    from "@chakra-ui/react";
import Jumbotron from "../components/Jumbotron";
import FirstSection from "../components/FirstSection";

function Home() {
    return (
        <Box>
            <Jumbotron />
            <FirstSection />
        </Box>
    );
}

export default Home
