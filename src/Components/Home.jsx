import React, { useState, useEffect } from "react";
import { getComics, Request } from "./Request";
import Search from "./Search";

const Home = () => {
  const [comics, setComics] = useState([]);

  const mixComics = comics[Math.floor(Math.random() * comics.length)]
  useEffect(() => {
    getComics(setComics);
  }, []);

  console.log(comics);
  return (
    <>
      <div className="flex items-center justify-center flex-col w-full h-full ">
        <h1 className="text-5xl text-white font-marvel tracking-wide">
          MARVEL
        </h1>
        <div className = "">
          {comics ? (
            <div>
              {comics.map((comic) => (
                <div className="w-full h-full grid grid-cols-1 float-left items-center justify-center pl-10">
                  <h1
                    className="text-white text-xl font-bold text-left"
                    key={comic.id}
                  >
                    {comic.title}
                  </h1>

                    <img
                      src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                      className="w-[200px] h-auto "
                      alt="no pic found"
                    />
                
                </div>
              ))}
            </div>
          ) : (
            <div> Nothing found </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
