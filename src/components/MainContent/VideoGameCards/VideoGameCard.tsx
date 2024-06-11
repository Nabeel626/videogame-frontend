import "./VideoGameCard.scss";
import VideoGameType from "../../../types/VideoGameType";
import { Link } from "react-router-dom";

type VideoGameProp = {
  videoGame: VideoGameType;
};

const VideoGameCard = ({ videoGame }: VideoGameProp) => {
  return (
    <div className="videoGameCard">
      <Link key={videoGame.id} to={`/videogame/all/${videoGame.id}`}>
        <img
          className="videoGameCard__image"
          src={"/videogame/public/gamepicture.webp"}
          alt="Game Image"
        />
        <h2 className="videoGameCard__title--gamename">
          {videoGame.game_name}
        </h2>
        <p className="videoGameCard__text--createdby">
          Created By: {videoGame.created_by}
        </p>
      </Link>
    </div>
  );
};

export default VideoGameCard;
