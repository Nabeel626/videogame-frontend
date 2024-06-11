import "./Home.scss";

const Home = () => {
  return (
    <div className="homepage">
      <h1 className="homepage__heading">WELCOME</h1>

      <img
        className="homepage__codImage"
        src="/videogame/public/codImage.png"
      />
      <div className="homepage__infoContainer">
        <h1 className="homepage__heading2">VIDEO GAMES</h1>

        <p className="homepage__paragraph--description">
          This App can help in filtering video games to find a perfect match for
          you along with reviews found the . Click the Reviews tab in the
          navigation bar to get started.{" "}
        </p>
      </div>

      <div className="homepage__trapezoid"></div>
      <div className="homepage__trapezoid2"></div>
    </div>
  );
};

export default Home;
