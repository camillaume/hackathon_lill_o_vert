import { Routes, Route } from "react-router-dom";
import SApp from "./AppStyle";
// import Home from "./pages/Home";
import Consume from "./pages/Consume";
// import Mobility from "./pages/Mobility";
import Sources from "./pages/Sources";
// import Team from "./pages/Team";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <SApp>
        <Header />
        <main>
          <Routes>
            {/* <Route path="*" element={<Home />} />
            <Route path="/" element={<Home />} /> */}
            <Route path="/consume" element={<Consume />} />
            {/* <Route path="/mobility" element={<Mobility />} /> */}
            <Route path="/sources" element={<Sources />} />
            {/* <Route path="/team" element={<Team />} /> */}
          </Routes>
        </main>
        {/* <Footer /> */}
      </SApp>
    </div>
  );
}

export default App;
