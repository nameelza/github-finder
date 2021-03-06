import { useContext } from "react";
import UserItem from "./UserItem";
import GithubContext from "../context/github/GithubContext";

function UserResults() {
  const { users, noUsers, loading } = useContext(GithubContext);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {noUsers ? (
        <h1>No users found</h1>
      ) : (
        users.map((user) => <UserItem key={user.id} user={user} />)
      )}
    </div>
  );
}

export default UserResults;
