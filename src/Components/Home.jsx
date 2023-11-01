import React, { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { getComics, Request } from "./Request";
import Search from "./Search";

const Home = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    getComics(setComics);
  }, []);

  console.log(comics);
  return (
    <>
      <div className="gr w-full h-full m-10 ">
        <div className = "">
          <Modal />
        </div>
        <h1 className="text-5xl text-white justify-center font-marvel tracking-wide">
          MARVEL
        </h1>

        <div className="w-1/2 h-full ">
          {comics ? (
            <div>
              {comics.map((comic) => (
                <div className="pl-3 m-10">
                  <h1
                    className="text-white text-xl font-bold text-left"
                    key={comic.id}
                  >
                    {comic.title}
                  </h1>

                  <img
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    className="w-[200px] min-h-[300px] bg-red-50 h-full "
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
