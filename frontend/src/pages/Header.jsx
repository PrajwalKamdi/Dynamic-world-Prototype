import Navbar from "./NavBar.jsx";
import PromotionStrip from "./PromotionStrip.jsx";

const Header = () => {
  return (
    <header>
      <div className="block">
        <PromotionStrip />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
