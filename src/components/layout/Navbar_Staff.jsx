import { Link } from "react-router";

const Navbar_Staff = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NotiChaco
          </Link>
          <div className="space-x-2">
            <Link to="/">Inicio</Link>
            <Link to="/upload">Upload</Link>
            <Link to="/upload_category">Upload Category</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar_Staff;
