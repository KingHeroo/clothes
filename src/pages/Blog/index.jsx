import {
  HomeContainer,
  HomeContentContainer,
  HomeHeaderContainer,
} from "./styles";
import Logo from "../../assets/images/Logo.png";
import a from "../../assets/images/SCN4030_VAG__QJN3118_XAH__1_.jpg";
import { Link } from "react-router-dom";

export function Blog() {
  return (
    <HomeContainer>
      <HomeHeaderContainer>
        <img src={Logo} alt="logo recipes" />
        <Link to="/blogdetail">GO TO BLOG</Link>
      </HomeHeaderContainer>
      <HomeContentContainer>
        <div>
          <h1>Easy & Smart Recipes</h1>
          <p>
            The designs from the sustainable line from Florence fashion house,
            Gucci Circular Lines, are created by creative director Alessandro
            Michele using a variety of eco-friendly fabrics, including recycled
            and organic materials such as Econyl , a recycled nylon yarn that
            was also used in Prada's Re-Nylon bag collection last year.
          </p>
        </div>
        <img src={a} className="aaa" alt="aa" />
      </HomeContentContainer>
    </HomeContainer>
  );
}
