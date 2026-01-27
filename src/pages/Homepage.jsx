import { useState } from "react";
import Navbar from "../components/Navbar";
import { searchApi } from "../api/apiservice";


const Home=()=>{

    const [searchResult, setSearchResult] = useState([]);

    const handleSearch = (searchQuery)=>{
        searchApi(searchQuery)
        .then(response=>{
            setSearchResult(response.data.items)
            console.log(response.data.items);
        }).catch(e=>console.log(e));
    }
    return(
        <>
            <Navbar handleSearch={handleSearch}/>
            <div className="container">
                <div className="row">
                    <div className="offset-1 col-10">
                        {searchResult.map(resultItem=>{
                            return(
                                <>
                                <Tile key={resultItem.etag} src={resultItem.snippet.thumbnails.medium.url} title={resultItem.snippet.title} publishedAt={resultItem.snippet.publishedAt} />
                                </>
                            )
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;

// import { useState } from "react";
// import { searchApi } from "../api/apiservice"
// import Navbar from "../components/Navbar";
// import SearchBar from "../components/SearchBar";
// import Tile from "../components/Tile";
// import { Link } from "react-router-dom";

// const Home = () => {

//     const [searchResult, setSearchResult] = useState([]);

//     const handleSearch = (searchQuery) => {
//         searchApi(searchQuery)
//             .then(response => {
//                 setSearchResult(response.data.items);

//                 console.log(response.data.items)
//             }).catch(e => console.log(e));
//     };

//     return (
//         <>
//             <Navbar />
//             <div className="container">
//                 <div className="row">
//                     <div className="offset-3 mt-5 col-6">
//                         <SearchBar handleSearch={handleSearch} />
//                     </div>
//                     <div className="offset-1 col-10">
//                         {searchResult.map(resultItem => {
//                             return (<>
//                             <Link to={`/video/${resultItem.id.videoId}`}>
//                             <Tile key={resultItem.etag} src={resultItem.snippet.thumbnails.medium.url} title={resultItem.snippet.title} publishedAt={resultItem.snippet.publishedAt} />
//                             </Link>
//                             </>)
//                         })}
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// };

// export default Home;