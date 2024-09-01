import Logo from "../Logo";
import Styles from "./styles.module.scss";

/**
 * This component renders footer element, contains logo,
 * links, addresses, and more, for `App.tsx`.
 *
 * @returns {JSX.Element}
 */
export default function Footer(): JSX.Element {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.col}>
        <Logo />
        <p className={Styles.desc}>نزدیک ترین دکتر به خودت رو پیدا کن</p>
      </div>

      <ul className={Styles.col}>
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

      <ul className={Styles.col}>
        <li className={Styles.item}>
          <a href="#">شرایط خدمات</a>
        </li>
        <li className={Styles.item}>
          <a href="#">حریم خصوصی</a>
        </li>
        <li className={Styles.item}>
          <a href="https://github.com/reza-kelidari/doctore-to" target="_blank">
            مشاهده در گیتهاب
          </a>
        </li>
      </ul>

      <ul className={[Styles.col, Styles.contactUs].join(" ")}>
        <li className={Styles.item}>
          <a href="mailto:info@example.com">info@example.com</a>
        </li>
        <li className={Styles.item}>
          <a href="tel:02112345678">021-1234 5678</a>
        </li>
      </ul>
    </footer>
  );
}
