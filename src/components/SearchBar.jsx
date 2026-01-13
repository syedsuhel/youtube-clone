const SearchBar = () => {
  const height = {
    height:"30px"
  };
  const barSizing={
        marginRight:"10%",
  }
  const srcSizing={
    width:"20rem"
  }
  return (
    <form className="d-flex" style={barSizing} role="search">
      <input
        className="border border-secondary border-end rounded-start-pill ps-3 "
        type="text"
        placeholder="Search"
        aria-label="Search"
        style={{...height, ...srcSizing}}
      />
      <button
        className="btn border-secondary rounded-0 border-start-0 rounded-end-pill d-flex justify-content-center align-items-center bg-white"
        type="submit"
        style={height}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
