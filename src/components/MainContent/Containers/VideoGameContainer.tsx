import VideoGameType from "../../../types/VideoGameType";
import { FormEvent, useEffect, useState } from "react";
import VideoGameCard from "../VideoGameCards/VideoGameCard";
import SearchBox from "../SearchBox/SearchBox";
import "./VideoGameContainer.scss";
import NavigationMenu from "../../NavigationMenu/NavigationMenu";

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
        <h2 className="videoGameMapCards__title">ALL VIDEO GAMES</h2>
        <SearchBox
          label={"Search Game Name"}
          searchTerm={searchTerm}
          handleInput={handleInput}
        />
        {filteredSearch.map((videogame) => (
          <VideoGameCard videoGame={videogame} />
        ))}
      </section>

      <NavigationMenu whichPage={"showAll"} />
    </>
  );
};

export default VideoGameContainer;
