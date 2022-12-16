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
      <div className="album">
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
  .albums {
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
`;
