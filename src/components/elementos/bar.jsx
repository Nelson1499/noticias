const Bar = ({ setsearch }) => {
  const searchUpload = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements[0].value;
    if (searchValue.length > 0) {
      console.log("Buscando:", searchValue);
      setsearch(searchValue);
    }
  };
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <form onSubmit={searchUpload} className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Bar;
