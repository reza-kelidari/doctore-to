import { useEffect, useState } from "react";
import Logo from "../Logo";
import Styles from "./styles.module.scss";
import Menu from "../../Icons/Menu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuShown, setMenuShown] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(scrollY > 5);
      console.log(window.scrollY);
    });
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
