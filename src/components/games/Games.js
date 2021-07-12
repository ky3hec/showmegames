import React from "react";
import Spinner from "../layout/Spinner";
import GameCard from "./GameCard";
import Pagination from "../layout/Pagination";

const GameList = ({ gameList, heading }) => {
  const { length } = gameList;
  return (
    <>
      <h3 className="text-center mb-4">{heading}</h3>
      <div className="row">
        {gameList.map((game) => {
          return <GameCard game={game} key={game.id} />;
        })}
      </div>
      {length > 10 ? <Pagination /> : null}
    </>
  );
};

const Games = () => {
  const heading = "Top 10 games";
  const games_list = [
    {
      name: "Game1",
      studio: "Studio1",
      year: "2020",
      genre: "Genre1",
      PG: "13",
      image: "https://via.placeholder.com/50",
      id: "1",
    },
    {
      name: "Game2",
      studio: "Studio2",
      year: "2018",
      genre: "Genre2",
      PG: "6",
      image: "https://via.placeholder.com/50",
      id: "2",
    },
    {
      name: "Game3",
      studio: "Studio3",
      year: "2012",
      genre: "Genre3",
      PG: "18",
      image: "https://via.placeholder.com/50",
      id: "3",
    },
    {
      name: "Game4",
      studio: "Studio4",
      year: "2016",
      genre: "Genre4",
      PG: "12",
      image: "https://via.placeholder.com/50",
      id: "4",
    },
  ];
  if (games_list === undefined || games_list.length === 0) {
    return <Spinner />;
  } else {
    return <GameList gameList={games_list} heading={heading} />;
  }
};
export default Games;
