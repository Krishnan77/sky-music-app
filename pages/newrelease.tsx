import React from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Body from "../components/Body";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import getStore, { fetchSongs } from "../shared/store/collection-slice";
import { Container } from "../styles/card.style";
import NewRelease from "../components/NewRelease";

const newrelease = () => {
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
              <NewRelease />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default newrelease;

export async function getServerSideProps() {
  const store = getStore();
  await store.dispatch(fetchSongs());
  return {
    props: {
      initialState: store.getState(),
    },
  };
}
