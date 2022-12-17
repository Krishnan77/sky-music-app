import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Body from "./Body";
import styled from "styled-components";

const HomeScreen = () => {
  return (
    <Container>
      <div className="music__body">
        <Sidebar />
        <div className="body">
          <Navbar />
          <div className="body__contents">
            <Body />
          </div>
        </div>
      </div>
      {/* <div className="footer">
      <Footer />
      </div> */}
    </Container>
  );
};

export default HomeScreen;

const Container = styled.div`
  /* overflow: hidden; */
  display: grid;
  /* grid-template-rows: 85vh 15vh; */
  .music__body {
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background: radial-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 87, 100);
    .body {
      height: 100%;
      width: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0.7rem;
        max-height: 2rem;
        &-thumb {
          background-color: rgba(255, 255, 255, 0.6);
        }
      }
    }
    .body__contents {
      height: 100vh;
    }
  }
`;
