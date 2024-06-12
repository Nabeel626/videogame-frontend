import NavigationMenu from "../../NavigationMenu/NavigationMenu";
import VideoGameForm from "../VideoGameForm/VideoGameForm";
import "./VideoGameFormContainer.scss";

const VideoGameFormContainer = () => {
  return (
    <>
      <section className="VideoGameFormContainer">
        <h2>ADD A VIDEO GAME</h2>

        <VideoGameForm />
      </section>

      <NavigationMenu whichPage={"create"} />
    </>
  );
};

export default VideoGameFormContainer;
