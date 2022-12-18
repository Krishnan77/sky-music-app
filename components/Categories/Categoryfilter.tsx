import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

const Categoryfilter = ({ filter, setData }: any) => {
  const [open, setOpen] = useState<React.SetStateAction<boolean> | boolean[]>(
    false
  );
  const [active, setActive] = useState<
    React.SetStateAction<undefined> | string[]
  >();
  const musicData = filter?.entry;

  const filterData = musicData?.map(
    (category: { category: { attributes: { term: string } } }) =>
      category.category.attributes.term
  );

  const distinctCategory = filterData?.filter(
    (item: [], index: number) => filterData.indexOf(item) === index
  );

  const handleCategoryFilter = (categoryName: string[]) => {
    const category = musicData?.filter(
      (item: { category: { attributes: { term: string[] } } }) =>
        item.category.attributes.term === categoryName
    );
    setData(category);
  };
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        <h1 className="header_head">Genre</h1>
        <div className="top-albums">
          <Slider {...settings}>
            {distinctCategory?.map((item: string[], index: number) => {
              return (
                <div className="category">
                  <div
                    className="genre-button"
                    key={index}
                    onClick={() => {
                      setActive(item);
                      handleCategoryFilter(item);
                    }}
                  >
                    {item}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default Categoryfilter;

const Container = styled.div`
  .top-albums {
    width: 65rem;
    margin-left: 40px;
  }
  .category {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header_head {
    color: white;
    padding: 1rem;
  }
  .genre-button {
    cursor: pointer;
    padding: 0.5rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid black;
    color: white;
    background-color: #0e0d0d;

    @media screen and (max-width: 900px) {
      font-size: 0.5rem;
      white-space: pre-wrap;
    }
  }
`;
