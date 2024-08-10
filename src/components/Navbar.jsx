import Logo from "../assets/ReactFacts-icon.png";

export default function Navbar() {
  return (
    <nav>
      <img className="nav-logo" src={Logo} alt="Image of React Icon" />
      <h3 className="nav-logo-title">ReactFacts</h3>
      <h4 className="push-right">React Course - Project 1</h4>
    </nav>
  );
}
