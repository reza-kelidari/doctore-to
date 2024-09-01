import { useEffect, useState } from "react";
import Logo from "../Logo";
import Styles from "./styles.module.scss";
import Menu from "../../Icons/Menu";

/**
 * This comonent renders Navigation bar, contains Logo and
 * some links, for `App.tsx`.
 *
 * @returns {JSX.Element}
 */
export default function Navbar(): JSX.Element {
  /**
   * This state declares that does user scrolled down
   * in the site, or not
   */
  const [scrolled, setScrolled] = useState<boolean>(false);

  /**
   * This state declares that does user clicked on
   * hamburger menu, or not
   */
  const [menuShown, setMenuShown] = useState<boolean>(false);

  /**
   * This effect adds a event listener to `window`, that listens
   * to user's scroll, and if user scrolled more than 5px from
   * top of screen, sets `scrolled` state to true
   */
  useEffect(() => {
    window.addEventListener("scroll", () => setScrolled(scrollY > 5));
  }, []);

  return (
    <nav className={[Styles.navbar, scrolled ? Styles.scrolled : ""].join(" ")}>
      <div className={Styles.container}>
        <Logo dark={scrolled} />

        <div
          className={Styles.menu}
          onClick={() => setMenuShown((prevState) => !prevState)}
        >
          <Menu fill={scrolled ? "#1e6063" : undefined} />
        </div>

        <ul
          className={[Styles.links, menuShown ? Styles.visible : ""].join(" ")}
        >
          <li className={Styles.item}>
            <a href="#">پزشکان</a>
          </li>
          <li className={Styles.item}>
            <a href="#">خدمات</a>
          </li>
          <li className={Styles.item}>
            <a href="#">تماس با ما</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
