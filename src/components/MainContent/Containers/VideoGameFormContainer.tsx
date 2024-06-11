import VideoGameForm from "../VideoGameForm/VideoGameForm";
import "./VideoGameFormContainer.scss";

const VideoGameFormContainer = () => {
  return (
    <section className="VideoGameFormContainer">
      <h2>ADD A VIDEO GAME</h2>

      <VideoGameForm />
    </section>
  );
};

export default VideoGameFormContainer;
