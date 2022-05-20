import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";

function User() {
  const { getUser } = useContext(GithubContext);
  const params = useParams();
  console.log(params.login);

  useEffect(() => {
    getUser(params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{params.login}</div>;
}

export default User;
