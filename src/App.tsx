import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/MainContent/Home/Home";
import VideoGameContainer from "./components/MainContent/Containers/VideoGameContainer";
import VideoGameFormContainer from "./components/MainContent/Containers/VideoGameFormContainer";

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
          <Route path="/videogame" element={<Home />} />
          <Route path="/videogame/all" element={<VideoGameContainer />} />
          <Route
            path="/videogame/create"
            element={<VideoGameFormContainer />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
