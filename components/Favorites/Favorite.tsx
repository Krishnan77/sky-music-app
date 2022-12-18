import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Container from "../../styles/maincard.style";

const Favorite = () => {
  const favList = useSelector((state: any) => state.songReducer.favorite);

  return (
    <>
      <Container data-testid="favorite-section">
        <h1 className="favorite_head">Favorites </h1>
        <div className="song_list">
          {favList?.map(
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
              return (
                <div className="album-entry">
                  <div className="container">
                    <img
                      src={entry["im:image"][2].label}
                      alt="album-thumbnail"
                      className="album-thumbnail"
                    />
                  </div>
                  <div className="description">
                    <a
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
          )}{" "}
        </div>
      </Container>
    </>
  );
};

export default Favorite;
