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
    fontWamily: "'Roboto', sans-serif",
    fontWeight: "500",
  };
  const logosty={
    width: "5px",
    height: "5px",
    backgroundColor: "#ffffff",
    display: "inline-block",
    clipPath: "polygon(100% 50%, 0 0, 0 100%)",
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand text-black" href="#">
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-center" style={navStyle}>
                <div style={logosty}></div>
            </div>
            <div className="text-danger">You</div>Tube
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
