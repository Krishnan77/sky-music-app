import React from "react";
import { useSelector } from "react-redux";
import { RootState, SongProps } from "../../shared/store/collection-slice";
import Container from "../../styles/maincard.style";

const OldSongs = () => {
  const { album } = useSelector((state: RootState | any) => state.songReducer) || [];

  const dateCalculator = (sortdate: any) => {
    var result = sortdate.slice(-4);
    return result;
  };

  const releaseDate = album?.entry?.map((item: SongProps) => {
    return {
      ...item,
      releasedDate: dateCalculator(item["im:releaseDate"]["attributes"].label),
    };
  });
  const sortedArray = releaseDate.sort((a: any, b: any) =>
    a.releasedDate.localeCompare(b.releasedDate)
  );

  return (
    <Container>
      <h1 className="favorite_head">Vintage Songs</h1>
      <div className="song_list">
        {sortedArray?.slice(0, 8).map(
          (entry: {
            "im:image":
              | {
                  label: string;
                }
              | any;
            title: {
              label: string;
            };
            id: {
              label: string;
            };
            link: {
              attributes: {
                href: string;
              };
            };
          }) => {
            return (
              <div className="album-entry">
                <div className="container">
                  <img
                    src={entry["im:image"][2].label}
                    alt="album-thumbnail"
                    className="album-thumbnail"
                  />
                </div>
                <div className="description">
                  <a
                    key={entry.id["label"]}
                    href={entry.link.attributes.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {entry.title.label}
                  </a>
                </div>
              </div>
            );
          }
        )}
      </div>
    </Container>
  );
};

export default OldSongs;
