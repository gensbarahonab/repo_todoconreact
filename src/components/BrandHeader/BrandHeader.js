import NavBar from "../NavBars/NavBar";
import Brand from "./Brand";
import "./BrandHeader.css";
function BrandHeader({ children }){
  return (
    <header>
      <Brand title="Mi App con react. Desarrollo de portales web II"></Brand>
      <NavBar></NavBar>
    </header>
  );
}

export default BrandHeader;
