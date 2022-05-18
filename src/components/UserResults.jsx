import { useEffect, useContext } from "react";
import UserItem from "./UserItem";
import GithubContext from "../context/github/GithubContext";

function UserResults() {
  const { users, loading, fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps -- needed to prevent infinite loop
  }, []); 

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserResults;
