import { Avatar } from 'rsuite';

const UserList = ({name = ""}) => {
  return (
    <div className="flex fy-center mb-1">
      <Avatar circle className="avatar" >{name.substr(0, 1)}</Avatar>
      <p className="username">{name}</p>
    </div>
  );
};

export default UserList;