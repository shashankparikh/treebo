import React, { useState, useEffect } from "react";
import GifPlayer from "react-gif-player";
import { Container, HeaderContainer, GifContainer, GifCard } from "./style";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import InjectLoader from "../../../components/common/Loader/loader";
import { debounce } from "./methods";
import { API_KEY } from "./constant";

const GifList = (props) => {
  const { getCategoryList, listData, getSearchList, theme, toggleTheme } =
    props;
  const [gifData, setGifData] = useState(listData);
  const [limit, setLimit] = useState(10);
  const [play, setPlaying] = useState(true);

  const handleSearchCall = debounce((e) => handleSearch(e), 2000);

  const scrollToEnd = () => {
    console.log("sdfg");
    setLimit(limit + 10);
  };

  // Method for scroll position
  const handleScroll = () => {
    // check if page has scroll to bottom
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  // To handle search call
  const handleSearch = (e) => {
    const { value } = e.target;
    const data = {
      q: value,
      api_key: API_KEY,
    };
    if (value) getSearchList(data);
  };

  //  For play/pause of gif

  // const handleGifPlay = (play) => {
  //   console.log(play, "play");
  //   setPlaying(play);
  // };

  // Hooks

  useEffect(() => {
    const fetchParams = {
      limit: limit,
      api_key: API_KEY,
    };
    getCategoryList(fetchParams);
  }, []);

  useEffect(() => {
    if (listData) {
      setGifData(listData);
    }
  }, [listData]);

  useEffect(() => {
    const data = {
      limit: limit,
      api_key: API_KEY,
    };
    getCategoryList(data);

    try {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } catch (e) {
      // e
    }
  }, [limit]);

  return (
    <Container>
      {/* <InjectLoader loading={gifData && gifData.length < 0} /> */}
      <HeaderContainer>
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          onChange={(e) => handleSearchCall(e)}
        />
      </HeaderContainer>
      <Switch onChange={toggleTheme} name="toggle" /> <span>{theme} theme</span>
      <GifContainer>
        {gifData &&
          gifData.length > 0 &&
          gifData.map((item, ind) => {
            return (
              <>
                <GifCard key={item.id}>
                  {/* <GifPlayer
                    gif={item.images.preview_gif.url}
                    still={item.images.preview_gif.url}
                    //   pauseRef={pause => this.pauseGif = pause}
                    onTogglePlay={handleGifPlay}
                    autoplay={play}
                  /> */}

                  <img src={item.images.preview_gif.url} />
                  <div key={item.id}>{item.title}</div>
                </GifCard>
              </>
            );
          })}
      </GifContainer>
    </Container>
  );
};

export default GifList;
