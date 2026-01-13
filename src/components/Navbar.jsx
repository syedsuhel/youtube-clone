import SearchBar from "./SearchBar";

const Navbar = () => {
  const navStyle = {
    backgroundColor: "#ff0000",
    width: "30px",
    height: "20px",
    borderRadius: "22%",
    aspectRatio: "3/2",
    clipPath: "ellipse(100% 50%)",
    display: "inline-block",
    marginRight: "4px",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "500",
  };
  const logosty = {
    width: "5px",
    height: "5px",
    backgroundColor: "#ffffff",
    display: "inline-block",
    clipPath: "polygon(100% 50%, 0 0, 0 100%)",
  };
  return (
    
    <nav class="navbar bg-body-tertiary" href="#" >
      <div class="container-fluid">
        <a class="navbar-brand">
        <div className="d-flex align-items-center">
           <div className="d-flex align-items-center justify-content-center" style={navStyle}>
               <div style={logosty}></div>
           </div>
            You<div className="text-danger">Tube <span style={{fontSize:'8px',color:'#000000'}}>mini</span></div>
         </div>
        </a>
        <SearchBar/>
      </div> 
    </nav>
  );
};

export default Navbar;
