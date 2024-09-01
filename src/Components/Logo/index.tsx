import Styles from "./styles.module.scss";
import Health from "../../Icons/Health";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div className={[Styles.logo, dark ? Styles.dark : ""].join(" ")}>
      <Health fill={dark ? "#1e6063" : undefined} />
      <span className={Styles.title}>دکتر تو</span>
    </div>
  );
}
