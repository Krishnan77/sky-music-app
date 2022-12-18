import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Body from "./Body";
import styled from "styled-components";
import { Container } from "../styles/card.style";

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
