import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div className="hero">
      <Link to="/" className="btn btn-primary btn-lg">
        Back To Home
      </Link>
    </div>
  );
}

export default Notfound;
