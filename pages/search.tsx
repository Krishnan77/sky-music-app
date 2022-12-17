import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Body from "../components/Body";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import getStore, { fetchSongs } from "../shared/store/collection-slice";

const search = () => {
  const { album } = useSelector((state: any) => state.songReducer) || [];
  const searchValue = useSelector((state: any) => state.songReducer.searchVal);
  return (
    <div>
      <Head>
        <title>Sky Music Searh</title>
        <meta
          name="keywords"
          content="music app, music , sky,search,songs,listen"
        />
        <link rel="icon" href="skylogo.png" />
      </Head>
      <Container>
        <div className="music__body">
          <Sidebar />
          <div className="body">
            <Navbar />
            <div className="body__contents">
              <Search />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default search;

export async function getServerSideProps() {
  const store = getStore();
  await store.dispatch(fetchSongs());
  return {
    props: {
      initialState: store.getState(),
    },
  };
}

const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
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
  }
  .body__contents {
    height: 100vh;
  }
`;
