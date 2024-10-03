import { Link } from 'react-router-dom';

export default function LoggedHeader() {
  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <i className="logo">logo</i>
        <Link to="/">Tunisian Citizen</Link>
      </div>
      <div className="headerRight">
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
}
