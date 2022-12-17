import React, { useState, useEffect } from "react";
// import { RootState } from "../shared/store";
import { useSelector } from "react-redux";
import Categoryfilter from "./Categories/Categoryfilter";
import styled from "styled-components";

const Body = () => {
  const [data, setData] = useState([]);

  const { album, loading } =
    useSelector((state: any) => state.songReducer) || [];
  const mainSongData = album?.entry;

  useEffect(() => {
    setData(mainSongData);
  }, [mainSongData]);
  return (
    <Container>
      <Categoryfilter filter={album} setData={setData} />
      <div className="song_list">
        {data?.map(
          (entry: {
            "im:image":
              | {
                  label: string;
                }
              | any;
            title: {
              label: string;
            };
            link: {
              attributes: {
                href: string;
              };
            };
          }) => {
            return (
              <div className="album-entry">
                {/* <div className="overlayer">
              <i className="far fa-play-circle"></i>
            </div> */}
                <img
                  src={entry["im:image"][2].label}
                  alt="album-thumbnail"
                  className="album-thumbnail"
                />
                <a
                  href={entry.link.attributes.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {entry.title.label}
                </a>
              </div>
            );
          }
        )}
      </div>
    </Container>
  );
};

export default Body;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .song_list {
    padding: 6%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;

    @media screen and (max-width: 900px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
    }
    @media screen and (max-width: 500px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 3rem;
    }
  }
  .album-thumbnail {
    width: 100%;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: whitesmoke;
    margin: 10px 0;
    font-family: sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 10px 0;
  }
  .album-entry {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    background: radial-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 87, 100);
    font-family: sans-serif;
    font-weight: 600;
    border-radius: 1rem;
  }
`;
