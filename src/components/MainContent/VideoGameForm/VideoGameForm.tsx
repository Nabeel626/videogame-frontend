import { useState } from "react";
import "./VideoGameForm.scss";

const VideoGameForm = () => {
  const [inputs, setInputs] = useState({
    game_name: "",
    released: "",
    created_by: "",
    platforms: [""],
    reviews: 0,
  });

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (inputs.reviews < 0 || inputs.reviews > 5) {
      alert("Please Only Pick A Number Between 0 and 5");
    } else {
      alert(
        `Game Name: ${inputs.game_name}, Created By: ${inputs.created_by}, released: ${inputs.released}, Game Review: ${inputs.reviews}`
      );
    }
  };

  return (
    <>
      <form className="VideoGameForm" onSubmit={handleSubmit}>
        <div className="VideoGameForm__section-gamename">
          <label>Enter Game Name:</label>
          <input
            type="text"
            name="game_name"
            value={inputs.game_name}
            onChange={handleChange}
            className="VideoGameForm__input"
          />
        </div>

        <div className="VideoGameForm__section-createdby">
          <label>Who is this Game Created By:</label>
          <input
            type="text"
            name="created_by"
            value={inputs.created_by}
            onChange={handleChange}
            className="VideoGameForm__input"
          />
        </div>

        <div className="VideoGameForm__section-platforms">
          <h4>Platforms to be played on:</h4>
          <br />
          <label>
            <input
              type="checkbox"
              name="platform"
              value={inputs.platforms}
              onChange={handleChange}
            />{" "}
            Playstation 5
          </label>

          <label>
            <input
              type="checkbox"
              name="platform"
              value={inputs.platforms}
              onChange={handleChange}
            />{" "}
            Playstation 4
          </label>

          <label>
            <input
              type="checkbox"
              name="platform"
              value={inputs.platforms}
              onChange={handleChange}
            />{" "}
            Playstation 3
          </label>

          <label>
            <input
              type="checkbox"
              name="platform"
              value={inputs.platforms}
              onChange={handleChange}
            />{" "}
            Xbox One
          </label>

          <label>
            <input
              type="checkbox"
              name="platform"
              value={inputs.platforms}
              onChange={handleChange}
            />{" "}
            Xbox Series X/S
          </label>

          <label>
            <input
              type="checkbox"
              name="platform"
              value={inputs.platforms}
              onChange={handleChange}
            />{" "}
            Nintendo Switch
          </label>

          <label>
            <input
              type="checkbox"
              name="platform"
              value={inputs.platforms}
              onChange={handleChange}
            />{" "}
            Microsoft Windows
          </label>
        </div>

        <div className="VideoGameForm__section-released">
          <label>When was Game Released:</label>
          <input
            type="month"
            name="released"
            value={inputs.reviews}
            onChange={handleChange}
            className="VideoGameForm__input"
          />
        </div>

        <div className="VideoGameForm__section-reviews">
          <label>Game Rating: </label>{" "}
          <input
            type="number"
            name="reviews"
            value={inputs.reviews}
            onChange={handleChange}
            className="VideoGameForm__input--review"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default VideoGameForm;
