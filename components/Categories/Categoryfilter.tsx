import React,{useState} from 'react'

const Categoryfilter = ({ filter, setData }: any ) => {

  const [active, setActive] = useState<React.SetStateAction<undefined> | string[]>();
  const musicData = filter?.entry;

  const filterData = musicData?.map(
    (category:
      { category:
        { attributes: { term: string; }; }; }) => category.category.attributes.term,
  );

  const distinctCategory = filterData?.filter(
    (item: [], index: number) => filterData.indexOf(item) === index,
  );

  const handleCategoryFilter = (categoryName: string[]) => {
    const category = musicData?.filter(
      (item:
        { category:
          { attributes:
            { term: string[]; }; }; }) => item.category.attributes.term === categoryName,
    );
    setData(category);
  };

  return (
    <>
    {distinctCategory?.map((item : string[]) => {
      return(
        <div className="top-albums">
          <button
            className="genre-button"
            type="button"
            onClick={() => {
            setActive(item);
            handleCategoryFilter(item);
            }}
          >
          {item}
          </button>
        </div>
      )
    })}
    </>
  )
}

export default Categoryfilter;