import AboutUs from "../Components/AboutUs";
import Categories from "../Components/Categories";
import Popular from "../Components/Popular";
import TopBar from "../Components/TopBar";
import Styles from "./styles.module.scss";

/**
 * This page renders all content of Home page
 * @returns {JSX.Element}
 */
export default function Home(): JSX.Element {
  return (
    <div className={Styles.home}>
      <TopBar />
      <Popular />
      <AboutUs />
      <Categories />
    </div>
  );
}
