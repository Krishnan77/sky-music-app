import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categoryfilter from "./Categories/Categoryfilter";
import styled from "styled-components";
import { albumActions, RootState } from "../shared/store/collection-slice";
import Favorite from "./Favorites/Favorite";
import OldSongs from "./Song types/OldSongs";

const Body = () => {
  const { album, loading } =
    useSelector((state: RootState | any) => state.songReducer) || [];
  const mainSongData = album?.entry;
  const [data, setData] = useState(mainSongData);
  const [showMore, setShowMore] = useState(12);
  const [clicked, setClicked] = useState(false);

  const dispatch = useDispatch();

  const favList = useSelector((state: RootState | any) => state.songReducer.favorite);

  return (
    <>
      <Container>
        {favList.length > 0 && <Favorite />}
        <OldSongs />
        <Categoryfilter filter={album} setData={setData} />

        <h1 className="header_head">TOP 100 Songs </h1>
        <div className="song_list">
          {data?.slice(0, showMore).map(
            (entry: {
              "im:image":
                | {
                    label: string;
                  }
                | any;
              title: {
                label: string;
              };
              id: {
                label: string;
              };
              link: {
                attributes: {
                  href: string;
                };
              };
            }) => {
              const isFavorite = favList.find((item: any) => {
                return item.id.label === entry.id.label;
              });
              return (
                <div className="album-entry">
                  <div className="container">
                    <img
                      src={entry["im:image"][2].label}
                      alt="album-thumbnail"
                      className="album-thumbnail"
                    />
                    {isFavorite ? (
                      <div className="heart_icon">
                        <img
                          src="red-heart.svg"
                          onClick={() => {
                            dispatch(
                              albumActions.removeFavorite(entry.id.label)
                            );
                            setClicked(false);
                          }}
                        />
                      </div>
                    ) : (
                      <div className="heart_icon">
                        <img
                          src="heart.svg"
                          onClick={() => {
                            dispatch(albumActions.addToFavorites(entry));
                            setClicked(true);
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="description">
                    <a
                      key={entry.id.label}
                      href={entry.link.attributes.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {entry.title.label}
                    </a>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </Container>
      {showMore <= data?.length && (
        <StyledPaginateButton data-testid="pagination">
          <button
            className="show-more"
            type="button"
            onClick={() => {
              setShowMore((prevValue) => prevValue + 12);
            }}
          >
            See more
          </button>
        </StyledPaginateButton>
      )}
    </>
  );
};

export default Body;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .header_head {
    color: white;
    padding: 1rem;
    margin-left: 30px;
  }

  .song_list {
    padding: 3%;
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
    font-weight: 500;
    font-size: 0.9rem;
    padding: 10px 0;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
  .album-entry {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    background-color: rgb(32, 87, 100);
    background: radial-gradient(transparent, rgba(0, 0, 0, 0.5));
    font-family: sans-serif;
    font-weight: 600;
    border-radius: 1rem;
    /* &:hover {
        background-color: rgba(0, 0, 0, 0.7);
      } */
  }
  .container {
    position: relative;
    width: 100%;
  }
  .description {
    padding: 15px;
  }

  .heart_icon {
    z-index: 1;
    background-color: transparent;
    position: absolute;
    width: 35px;
    height: 35px;
    bottom: 0;
    right: 0;
    padding: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
const StyledPaginateButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .show-more {
    color: white;
    background-color: #f53b77;
    border: none;
    border-radius: 2rem;
    padding: 1rem;
    width: 8rem;
    cursor: pointer;
    font-family: sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
