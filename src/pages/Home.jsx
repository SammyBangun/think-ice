import {
    Box,
}
    from "@chakra-ui/react";
import Jumbotron from "../components/Jumbotron";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import IceCube from "../components/Ice";

function Home() {
    return (
        <Box>
            <Jumbotron />
            <FirstSection />
            <IceCube />
            <SecondSection />
        </Box>
    );
}

export default Home
