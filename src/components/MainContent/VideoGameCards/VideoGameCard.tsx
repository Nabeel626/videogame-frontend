import "./VideoGameCard.scss";

const VideoGameCard = () => {
  return (
    <div className="beerCard__container">
      <img className="beerCard__image" src={image} alt="Beer Bottle" />
      <h2 className="beerCard__name">{name}</h2>
    </div>
  );
};

export default VideoGameCard;
