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
        src={
          "/videogame/public/gameImage2.webp" ??
          "/videogame/public/gamepicture.webp"
        }
        alt="Game Image"
      />
      <div className="videoGameCard__info--container">
        <h2 className="videoGameCard__title--gamename">
          {videoGame.game_name}
        </h2>
        <p className="videoGameCard__text--createdby">
          Created By: {videoGame.created_by}
        </p>
      </div>
    </div>
  );
};

export default VideoGameCard;
