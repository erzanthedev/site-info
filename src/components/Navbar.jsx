import Logo from "../assets/ReactFacts-icon.png";

export default function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="Image of React Icon" />
      <h3>ReactFacts</h3>
    </nav>
  );
}
