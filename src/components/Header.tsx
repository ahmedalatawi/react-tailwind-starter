import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Pizza Heaven</Link>
      <p>John Smith</p>
    </header>
  );
}

export default Header;
