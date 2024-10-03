import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <i className="logo">logo</i>
        <Link to="/">Tunisian Citizen</Link>
      </div>
      <div className="headerRight">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
}
