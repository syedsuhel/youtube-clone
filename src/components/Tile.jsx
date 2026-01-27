const Tile = ({ title, src, publishedAt }) => {
  return (
    <>
      <div className="card">
        <img src={src} className="card-img-top" />
        <div className="card-body">
          <div className="fs-3">{title}</div>
          <div className="fs-5">{publishedAt}</div>
        </div>
      </div>
    </>
  );
};

export default Tile;
