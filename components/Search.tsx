import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Search = () => {
  const { album } = useSelector((state: any) => state.songReducer) || [];
  const searchValue = useSelector((state: any) => state.songReducer.searchVal);
  return (
    <Container>
      <div className="song_list">
        {album?.entry
          ?.filter((a: any) =>
            a["im:artist"].label.toLowerCase().includes(searchValue)
          )
          .slice(0, 20)
          .map((p: any) => (
            <div className="album-entry">
              <img
                alt="album-thumbnail"
                className="album-thumbnail"
                src={p["im:image"][2].label}
              />
              <a href={p.link.attributes.href} target="_blank" rel="noreferrer">
                {p.title.label}
              </a>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Search;

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
