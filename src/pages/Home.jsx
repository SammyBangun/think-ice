import {
    Box,
}
    from "@chakra-ui/react";
import Jumbotron from "../components/Jumbotron";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import IceCube from "../components/Ice";

function Home() {
    return (
        <Box>
            <Jumbotron />
            <FirstSection />
            <IceCube />
            <SecondSection />
            <ThirdSection />
        </Box>
    );
}

export default Home
