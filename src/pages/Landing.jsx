import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../service/api";
import { getRandomJoke } from "../service/joke.service";

const Landing = () => {
  const [joke, setJoke] = useState(null);

  const fetchJokes = async () => {
    const response = await getRandomJoke();
    setJoke(response.result);
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  function upperFirstLetter(string) {
    const newString = string[0].toUpperCase() + string.slice(1);
    return newString;
  }

  return (
    <main>
      <h2>Jaune, drôle et complètement barré</h2>
      <div className="joke-container">
        <img
          src="public/10530-carambar-candies-food.gif"
          alt=""
          className="carambar-gif"
        />
        <div className="joke-wrapper">
          {joke ? (
            <div>
              <p className="joke-text">{upperFirstLetter(joke.question)}</p>
              <p className="joke-text">{upperFirstLetter(joke.answer)}</p>
            </div>
          ) : (
            <div>
              <p className="joke-text">
                Appuyer sur le bouton pour tirer votre première blague
              </p>
              <p className="joke-text">⋆⭒˚.⋆✶⋆.˚✮⋆˙ᯓ★</p>
            </div>
          )}
          <button onClick={fetchJokes}>Tirer une blague</button>
        </div>
      </div>
    </main>
  );
};

export default Landing;
