import PropTypes from "prop-types";

function UserItem(user) {
  return (
    <div>
      <h3>{user.login}</h3>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem;
