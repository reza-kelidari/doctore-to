import Styles from "./styles.module.scss";
import Health from "../../Icons/Health";
import { LogoParamsType } from "./types";

/**
 * This component renders Logo of site for Navbar and
 * Footer
 *
 * @returns {JSX.Element}
 */
export default function Logo({ dark = false }: LogoParamsType): JSX.Element {
  return (
    <a href="/" className={[Styles.logo, dark ? Styles.dark : ""].join(" ")}>
      <Health fill={dark ? "#1e6063" : undefined} />
      <span className={Styles.title}>دکتر تو</span>
    </a>
  );
}
