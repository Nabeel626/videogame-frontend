import VideoGameType from "../../../types/VideoGameType";
import { FormEvent, useEffect, useState } from "react";
import VideoGameCard from "../VideoGameCards/VideoGameCard";
import SearchBox from "../SearchBox/SearchBox";
import "./VideoGameContainer.scss";
import NavigationMenu from "../../NavigationMenu/NavigationMenu";
import { Link } from "react-router-dom";

const VideoGameContainer = () => {
  const [allVideoGames, setAllVideoGames] = useState<VideoGameType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const cleanedInput = event?.currentTarget.value.toLowerCase();
    setSearchTerm(cleanedInput);
  };

  const getAllVideoGames = async () => {
    let url = `http://localhost:8080/videogames`;

    const data = await fetch(url);
    const videoGamesData = await data.json();
    setAllVideoGames(videoGamesData);
  };

  const filteredSearch = allVideoGames.filter((game) => {
    return game.game_name.toLowerCase().includes(searchTerm);
  });

  useEffect(() => {
    getAllVideoGames();
  }, []);

  return (
    <>
      <section className="videoGameMapCards">
        <div className="videoGameMapCards__trapezoid"></div>
        <div className="videoGameMapCards__trapezoid2"></div>
        <h2 className="videoGameMapCards__title">ALL VIDEO </h2>
        <h2 className="videoGameMapCards__title2">GAMES</h2>
        <SearchBox
          label={"Search Game Name"}
          searchTerm={searchTerm}
          handleInput={handleInput}
        />
        {filteredSearch.map((videogame) => (
          <Link key={videogame.id} to={`/videogame/all/${videogame.id}`}>
            <VideoGameCard videoGame={videogame} />
          </Link>
        ))}
      </section>

      <NavigationMenu whichPage={"showAll"} />
    </>
  );
};

export default VideoGameContainer;
