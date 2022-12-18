import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .favorite_head {
    color: white;
    padding: 1rem;
    margin-left: 30px;
  }
  .song_list {
    padding: 3%;
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
  .album-thumbnail {
    width: 100%;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: whitesmoke;
    margin: 10px 0;
    font-family: sans-serif;
    font-weight: 500;
    font-size: 0.8rem;
    padding: 10px 0;
  }
  .album-entry {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    background: radial-gradient(transparent, rgba(0, 0, 0, 0.5));
    background-color: rgb(32, 87, 100);
    font-family: sans-serif;
    font-weight: 600;
    border-radius: 1rem;
  }
  .container {
    position: relative;
    width: 100%;
  }
  .description {
    padding: 15px;
  }
`;

export default Container;
