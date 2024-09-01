import Arrow from "../../../Icons/Arrow";
import Styles from "./styles.module.scss";

/**
 * This component renders popular categories for Home page
 *
 * @returns {JSX.Element}
 */
export default function Popular(): JSX.Element {
  return (
    <div className={Styles.popular}>
      <h1 className={Styles.title}>پربازدید ترین تخصص ها</h1>

      <div className={Styles.list}>
        <div className={Styles.item}>
          <img src="/medical.png" alt="Medical" className={Styles.icon} />
          <h3 className={Styles.title}>ارتوپد</h3>
          <p className={Styles.desc}>نزدیک ترین دکتر به خودت رو پیدا کن</p>
          <a href="#" className={Styles.button}>
            <Arrow />
          </a>
        </div>

        <div className={Styles.item}>
          <img src="/medical.png" alt="Medical" className={Styles.icon} />
          <h3 className={Styles.title}>روانپزشکی</h3>
          <p className={Styles.desc}>نزدیک ترین دکتر به خودت رو پیدا کن</p>
          <a href="#" className={Styles.button}>
            <Arrow />
          </a>
        </div>

        <div className={Styles.item}>
          <img src="/medical.png" alt="Medical" className={Styles.icon} />
          <h3 className={Styles.title}>ریه</h3>
          <p className={Styles.desc}>نزدیک ترین دکتر به خودت رو پیدا کن</p>
          <a href="#" className={Styles.button}>
            <Arrow />
          </a>
        </div>

        <div className={Styles.item}>
          <img src="/medical.png" alt="Medical" className={Styles.icon} />
          <h3 className={Styles.title}>عفونی</h3>
          <p className={Styles.desc}>نزدیک ترین دکتر به خودت رو پیدا کن</p>
          <a href="#" className={Styles.button}>
            <Arrow />
          </a>
        </div>
      </div>
    </div>
  );
}
