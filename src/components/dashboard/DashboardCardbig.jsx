function DashboardCardbig() {
  return (
    <div className="card mb-3"  style={{ width: "100%" }}>
      <img
        src="https://images.unsplash.com/photo-1682686580024-580519d4b2d2?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="card-img-top"
        alt="..."
      />

      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
}

export default DashboardCardbig;
