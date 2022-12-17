import React, { useState } from "react";
import styled from "styled-components";

const Categoryfilter = ({ filter, setData }: any) => {
  const [open, setOpen] = useState<React.SetStateAction<boolean> | boolean[]>(
    false
  );
  const [active, setActive] = useState<
    React.SetStateAction<undefined> | string[]
  >();
  const musicData = filter?.entry;

  const toggle = () => {
    setOpen(!open);
  };

  const filterData = musicData?.map(
    (category: { category: { attributes: { term: string } } }) =>
      category.category.attributes.term
  );

  const distinctCategory = filterData?.filter(
    (item: [], index: number) => filterData.indexOf(item) === index
  );
  console.log("distinctCategory", distinctCategory);

  const handleCategoryFilter = (categoryName: string[]) => {
    const category = musicData?.filter(
      (item: { category: { attributes: { term: string[] } } }) =>
        item.category.attributes.term === categoryName
    );
    setData(category);
  };

  return (
    <>
      <div className="dropDown">
        <div
          className="dropDownMenu"
          style={{ color: "white" }}
          onClick={toggle}
        >
          dropdown
          {open &&
            distinctCategory.map((a: any) => {
              return (
                <>
                  <li
                    onClick={() => {
                      setActive(a);
                      handleCategoryFilter(a);
                    }}
                  >
                    {a}
                  </li>
                </>
              );
            })}
          {/* {open &&
          {distinctCategory.map((item : string[]) => {
          <div>
            <li  onClick={() => {
            setActive(item);
            handleCategoryFilter(item);
             }}>
              {item}
            </li>
          </div>
            })} */}
        </div>
      </div>
    </>
  );
};

export default Categoryfilter;

const Container = styled.div`
  /* display: flex;
flex-direction: row; */
  /* .top-albums{

  background-color: aqua;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
} */
  .genre-button {
    padding: 1rem;
    font-weight: 600;
    font-family: sans-serif;
    border: none;
    border-radius: 2rem;
    background-color: transparent;
    cursor: pointer;
    border: solid 0.5px;
    @media screen and (max-width: 900px) {
      width: 80%;
      font-size: 0.5rem;
      white-space: pre-wrap;
    }
  }
`;
