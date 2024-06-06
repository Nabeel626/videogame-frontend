import "./VideoGameCard.scss";
import VideoGameType from "../../../types/VideoGameType";

type VideoGameProp = {
  videoGame: VideoGameType;
};

const VideoGameCard = ({ videoGame }: VideoGameProp) => {
  return (
    <div className="videoGameCard">
      <img
        className="videoGameCard__image"
        src={"../../../../public/gameImage.avif"}
        alt="Game Image"
      />
      <h3 className="videoGameCard__title--gamename">{videoGame.game_name}</h3>
      <p className="videoGameCard__text--createdby">
        Created By: {videoGame.created_by}
      </p>
    </div>
  );
};

export default VideoGameCard;
