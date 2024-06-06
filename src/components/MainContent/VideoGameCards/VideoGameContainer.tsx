import { Link } from "react-router-dom";
import VideoGameType from "../../../types/VideoGameType";
import { useEffect, useState } from "react";
import VideoGameCard from "./VideoGameCard";

const VideoGameContainer = () => {
  const [allVideoGames, setAllVideoGames] = useState<VideoGameType[]>([]);

  const getAllVideoGames = async () => {
    let url = `http://localhost:8080/videogames`;

    const data = await fetch(url);
    const videoGamesData = await data.json();
    console.log(videoGamesData);

    setAllVideoGames(videoGamesData);
    console.log("container " + allVideoGames);
  };

  useEffect(() => {
    getAllVideoGames();
  }, []);

  return (
    <>
      <section className="videoGameMapCards">
        <h2 className="videoGameMapCards__title">ALL VIDEO GAMES</h2>
        {allVideoGames.map((videogame) => (
          <Link key={videogame.id} to={`/videogame/${videogame.id}`}>
            <VideoGameCard videoGame={videogame} />
          </Link>
        ))}
      </section>
    </>
  );
};

export default VideoGameContainer;
