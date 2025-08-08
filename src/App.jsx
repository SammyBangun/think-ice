import { Routes, Route } from "react-router-dom";
import Layout from "./layout/AppLayout";
import Home from "./pages/Home";
// import Steps from "./pages/Steps";
// import Techniques from "./pages/Techniques";
// import Philosophy from "./pages/Philosophy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="steps" element={<Steps />} />
        <Route path="techniques" element={<Techniques />} />
        <Route path="philosophy" element={<Philosophy />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
