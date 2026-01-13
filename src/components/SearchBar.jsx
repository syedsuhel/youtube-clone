
const SearchBar =()=>{
    return(
        
        <form className="d-flex" role="search">
          <input
            className=" border-end-0  "
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn border-start-0 " type="submit">
            Search
          </button >
        </form>
    )
}

export default SearchBar;