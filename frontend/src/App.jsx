import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer.jsx";
import Header from "./pages/Header.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
