import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { fetchSongs } from "../shared/store/collection-slice";
import getStore from "../shared/store/collection-slice";
import { useSelector } from "react-redux";
import HomeScreen from "../components/HomeScreen";

export default function Home() {
  const { album, loading } =
    useSelector((state: any) => state.songReducer) || [];

  return (
    <div className={styles.container}>
      <Head>
        <title>Sky Music App</title>
        <meta name="keywords" content="music app, music , sky" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeScreen />
    </div>
  );
}

export async function getServerSideProps() {
  const store = getStore();
  await store.dispatch(fetchSongs());
  return {
    props: {
      initialState: store.getState(),
    },
  };
}
