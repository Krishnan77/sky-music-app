import React from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { albumActions } from "../shared/store/collection-slice";
import Link from "next/link";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <div className="search__bar">
        <FaSearch />
        <Link href="/search">
          <input
            type="text"
            placeholder="Artists, songs, or podcasts"
            onChange={(e: React.ChangeEvent<HTMLInputElement> | any) =>
              dispatch(albumActions.searchValue(e.target.value))
            }
          />
        </Link>
      </div>
      <div className="sky-plus"> Go Ad Free</div>
      <div className="sky-plus">Get Sky plus</div>
      <div className="avatar">
        <a href="#">
          <CgProfile />
          <span>Sign in</span>
        </a>
      </div>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 15vh;
  top: 0;
  transition: 0.3s ease-in-out;
  background-color: "rgba(0,0,0,0.7)";
  font-family: sans-serif;
  .sky-plus {
    font-family: sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: white;
    border: solid 1px red;
    border-radius: 2rem;
    padding: 0.6rem;
    cursor: pointer;
    background-color: #f53b77;
    @media screen and (max-width: 900px) {
      width: 20%;
      font-size: 5px;
    }
    @media screen and (max-width: 500px) {
      width: 2%;
      font-size: 5px;
    }
  }
  .search__bar {
    background-color: white;
    width: 30%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    @media screen and (max-width: 900px) {
      width: 50%;
    }
    @media screen and (max-width: 500px) {
      width: 50%;
    }

    input {
      border: none;
      height: 2rem;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }
  .avatar {
    background-color: black;
    padding: 0.3rem 0.4rem;
    padding-right: 1rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: white;
      font-weight: 600;
      svg {
        font-size: 1.3rem;
        background-color: #282828;
        padding: 0.2rem;
        border-radius: 1rem;
        color: #c7c5c5;
      }
    }
  }
`;
