import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import styled from "styled-components";

const NewRelease = () => {
  const { album } = useSelector((state: any) => state.songReducer) || [];

  const dateCalculator = (sortdate: any) => {
    var result = sortdate.slice(-4);
    return result;
  };

  const releaseDate = album?.entry?.map((item: any) => {
    return {
      ...item,
      releasedDate: dateCalculator(item["im:releaseDate"]["attributes"].label),
    };
  });
  const sortedArray = releaseDate.sort((a: any, b: any) =>
    b.releasedDate.localeCompare(a.releasedDate)
  );

  return (
    <Container>
      <div className="playlist">
        <div className="image">
          <img src="mix.webp" alt="selected playlist" />
        </div>
        <div className="details">
          <span className="type">NEW RELEASES</span>
          <h1 className="title">Listen to Latest Songs</h1>
          <p className="description"></p>
        </div>
      </div>
      <div className="list">
        <div className="header-row">
          <div className="col">
            <span>#</span>
          </div>
          <div className="col">
            <span>TITLE</span>
          </div>
          <div className="col">
            <span>CATEGORY</span>
          </div>
          <div className="col">
            <span>PRICE</span>
          </div>
        </div>
      </div>
      <div className="tracks">
        {sortedArray?.slice(0, 10).map((item: any, index: any) => (
          <div className="row">
            <div className="col">
              <span>{index + 1}</span>
            </div>
            <div className="col detail">
              <div className="image">
                <img src={item["im:image"][2].label} alt="track" />
              </div>
              <div className="info">
                <span className="name">{item["im:name"].label}</span>
                <span>{item["im:artist"].label}</span>
              </div>
            </div>
            <div className="col">
              <span>{item["category"]["attributes"].label}</span>
            </div>
            <div className="col">
              <span>{item["im:price"].label}</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default NewRelease;

const Container = styled.div`
  .playlist {
    margin: 0 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    .image {
      img {
        height: 15rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
      }
    }
    .details {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: #e0dede;
      .title {
        color: white;
        font-size: 2rem;
      }
    }
  }
  .list {
    .header-row {
      display: grid;
      grid-template-columns: 0.3fr 3fr 2fr 0.1fr;
      margin: 1rem 0 0 0;
      color: #dddcdc;
      position: sticky;
      top: 15vh;
      padding: 1rem 3rem;
      transition: 0.3s ease-in-out;
      background-color: "#000000dc";
    }
  }
  .tracks {
    margin: 0 2rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
    font-size: small;
    .row {
      padding: 0.5rem 1rem;
      display: grid;
      grid-template-columns: 0.3fr 3.1fr 2fr 0.1fr;
      &:hover {
        background-color: rgba(0, 0, 0, 0.7);
      }
      .col {
        display: flex;
        align-items: center;
        color: #dddcdc;
        img {
          height: 40px;
          width: 40px;
        }
      }
      .detail {
        display: flex;
        gap: 1rem;
        .info {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`;
