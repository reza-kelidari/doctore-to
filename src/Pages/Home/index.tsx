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
    </div>
  );
}
