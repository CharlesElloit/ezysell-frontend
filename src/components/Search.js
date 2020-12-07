import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import SearchIcon from "@material-ui/icons/Search";
import MicroIcon from "@material-ui/icons/MicNoneOutlined";
import IconButton from "@material-ui/core/IconButton";

export default function SearchInput(props) {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(null);
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const data = await fetch("/api/products");
    const response = await data.json();
    setList(response);
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  const options = {
    keys: ["title", "brand", "name"]
  };

  const fuse = new Fuse(list, options);

  const searchQuery = "women's short dress";

  const searchResults = fuse.search(searchQuery);

  searchResults.map(item => console.log(item.item.name));

  const handleChangle = event => {
    setSearch(event.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="search-container">
      <div className="header-subHeader">
        <SearchIcon />
        <form action="/searchPage" method="POST" onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            value={search}
            onChange={event => handleChangle(event.target)}
            placeholder="Search products, brands and categories"
          />
        </form>
      </div>
      <div className="camera">
        <IconButton>
          <MicroIcon className="microphoneIcon" />
        </IconButton>
      </div>
    </div>
  );
}

// const options = {
//   // isCaseSensitive: false,
//   // includeScore: false,
//   // shouldSort: true,
//   // includeMatches: false,
//   // findAllMatches: false,
//   // minMatchCharLength: 1,
//   // location: 0,
//   // threshold: 0.6,
//   // distance: 100,
//   // useExtendedSearch: false,
//   // ignoreLocation: false,
//   // ignoreFieldNorm: false,
//   keys: ["title", "author.firstName"]
// };

// const fuse = new Fuse(list, options);

// // Change the pattern
// const pattern = "demons";

// return fuse.search(pattern);

// const getAudioText = () => {
//    try {
//       const SpeechRecognition =
//          window.SpeechRecognition || window.webkitSpeechRecognition;
//       const recognition = new SpeechRecognition();
//       recognition.onresult = event => {
//          const current = event.resultIndex;
//          const transcript = event.results[current][0].transcript;
//          console.log(transcript);
//       };
//    } catch (error) {
//       console.error(error);
//    }
// };
