import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/MainContent/Home/Home";
import VideoGameContainer from "./components/MainContent/VideoGameCards/VideoGameContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <section>
          <div className="background__graphic"></div>
          <div className="background__graphic background__graphic--vector1"></div>
          <div className="background__graphic background__graphic--vector2"></div>
        </section>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/videogame" element={<VideoGameContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
