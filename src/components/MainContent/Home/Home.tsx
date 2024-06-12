import NavigationMenu from "../../NavigationMenu/NavigationMenu";
import "./Home.scss";

const Home = () => {
  return (
    <div className="homepage">
      <h1 className="homepage__heading">HOME</h1>

      <img
        className="homepage__codImage"
        src="/videogame/public/codImage.png"
      />
      <div className="homepage__infoContainer">
        <h1>ABOUT THE VIDEO GAMES</h1>

        <p>
          This App can help in filtering video games to find a perfect match for
          you along with reviews found in the tabs at the bottom. Click the tabs
          in the navigation bar to get started.{" "}
        </p>
      </div>

      <div className="homepage__trapezoid"></div>
      <div className="homepage__trapezoid2"></div>

      <NavigationMenu whichPage={"home"} />
    </div>
  );
};

export default Home;
