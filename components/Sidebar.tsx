import React from "react";
import styled from "styled-components";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import Link from "next/link";
import { BiPodcast } from "react-icons/bi";
import { GiLoveSong } from "react-icons/gi";
import { AiOutlineDownload } from "react-icons/ai";

const Sidebar = () => {
  return (
    <Container>
      <div className="top__links">
        <div className="logo">
          <img className="image" src="sky.png" alt="SKY" />
        </div>
        <ul>
          <li>
            <MdHomeFilled />
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <MdSearch />
            <Link href="/newrelease">
              <span>New Releases</span>
            </Link>
          </li>
          <li>
            <BiPodcast />
            <span>Podcasts</span>
          </li>
          <li>
            <GiLoveSong />
            <span>Old Songs</span>
          </li>
          <li>
            <AiOutlineDownload />
            <span>Install our app</span>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  background-color: black;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .top__links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      margin: 0.2rem 0;
      .image {
        width: 100px;
        @media screen and (max-width: 900px) {
          width: 80px;
          text-align: center;
          margin-left: 33px;
        }
        @media screen and (max-width: 500px) {
          width: 50px;
          text-align: center;
          margin-left: 13px;
        }
      }
      @media screen and (max-width: 900px) {
        width: 50px;
        text-align: center;
      }
      @media screen and (max-width: 500px) {
        width: 20px;
        text-align: center;
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        padding: 10px;
        font-size: large;
      }
      @media screen and (max-width: 500px) {
        display: flex;
        flex-direction: column;
        padding: 5px;
        text-align: center;
        font-size: smaller;
      }
      li {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }
`;
