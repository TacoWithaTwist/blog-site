import { Link } from 'react-router-dom';
export default function ErrorPage() {
  return (
    <>
      <h2>Oops! Looks like we encountered an error.</h2>
      <Link to="/">You can go back to Home Page.</Link>
    </>
  );
}
