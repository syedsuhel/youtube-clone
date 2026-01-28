import { useState } from "react";
import Navbar from "../components/Navbar";
import { searchApi } from "../api/apiservice";

const Home = () => {
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (searchQuery) => {
    searchApi(searchQuery)
      .then((response) => {
        setSearchResult(response.data.items);
        console.log(response.data.items);
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <Navbar handleSearch={handleSearch} />
      <div className="container">
        <div className="row">
          <div className="offset-1 col-10">
            {searchResult.map((resultItem) => {
              return (
                <>
                  <Link to={`/video/${resultItem.id.videoId}`}>
                    <Tile
                      key={resultItem.etag}
                      src={resultItem.snippet.thumbnails.medium.url}
                      title={resultItem.snippet.title}
                      publishedAt={resultItem.snippet.publishedAt}
                    />
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

