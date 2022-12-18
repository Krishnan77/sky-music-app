import { createSlice, createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import colletionData from "../../pages/api/collection";
import { configureStore } from "@reduxjs/toolkit";

interface SongProps {
  "im:name": {
    label: string;
  };
  "im:image": {
    label: string;
    attributes: {
      height: string;
    };
  }[];
  "im:itemCount": {
    label: string;
  };
  "im:price": {
    label: string;
    attributes: {
      amount: string;
      currency: string;
    };
  };
  "im:contentType": {
    "im:contentType": {
      attributes: {
        term: string;
        label: string;
      };
    };
    attributes: {
      term: string;
      label: string;
    };
  };
  "im:artist": {
    label: string;
    attributes: {
      href: string;
    };
  };
  "im:releaseDate": {
    label: string;
    attributes: {
      label: string;
    };
  };
  rights: {
    label: string;
  };
  title: {
    label: string;
  };
  link: {
    attributes: {
      rel: string;
      type: string;
      href: string;
    };
  };
  id: {
    label: string;
    attributes: {
      "im:id": string;
    };
  };
  category: {
    attributes: {
      "im:id": string;
      term: string;
      scheme: string;
      label: string;
    };
  };
}
interface SongInitialProps {
  payload: object;
  feed: object;
  entry: SongProps[];
}
interface AlbumProps {
  loading: boolean;
  album: SongInitialProps | any;
  error: object;
  searchVal: string;
  favorite: any;
}
const initialState: AlbumProps = {
  loading: false,
  album: {
    entry: [
      {
        "im:name": { label: "" },
        "im:image": [
          {
            label: "",
            attributes: { height: "" },
          },
          {
            label: "",
            attributes: { height: "" },
          },
          {
            label: "",
            attributes: { height: "" },
          },
        ],
        "im:itemCount": { label: "" },
        "im:price": {
          label: "",
          attributes: { amount: "", currency: "" },
        },
        "im:contentType": {
          "im:contentType": {
            attributes: { term: "", label: "" },
          },
          attributes: { term: "", label: "" },
        },
        rights: {
          label: "",
        },
        title: { label: "" },
        link: {
          attributes: {
            rel: "",
            type: "",
            href: "",
          },
        },
        id: {
          label: "",
          attributes: { "im:id": "" },
        },
        "im:artist": {
          label: "",
          attributes: {
            href: "",
          },
        },
        category: {
          attributes: {
            "im:id": "",
            term: "",
            scheme: "",
            label: "",
          },
        },
        "im:releaseDate": {
          label: "",
          attributes: { label: "" },
        },
      },
    ],
  },
  error: {},
  searchVal: "",
  favorite: [],
};

export const fetchSongs = createAsyncThunk("collectionData", colletionData);

const songSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    searchValue: (state, { payload }: any) => {
      state.searchVal = payload;
    },
    addToFavorites: (state, { payload }) => {
      state.favorite = [...state.favorite, payload];
    },
    removeFavorite: (state, { payload }) => {
      state.favorite = state.favorite.filter(
        (item: any) => item.id.label !== payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSongs.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.album = payload.feed;
      })
      .addCase(fetchSongs.rejected, (state, err) => {
        state.loading = false;
        state.error = err.error;
      });
  },
});
export const albumActions = songSlice.actions;
// export default songSlice.reducer;

export let store = null;

export default function getStore(incomingPreloadState?: any) {
  const store = configureStore({
    reducer: {
      songReducer: songSlice.reducer,
    },
    preloadedState: incomingPreloadState,
  });
  return store;
}
