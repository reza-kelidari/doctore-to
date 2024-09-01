import Doctor from "../../../Icons/Doctor";
import Styles from "./styles.module.scss";

export default function Categories() {
  return (
    <div className={Styles.categories}>
      <h1 className={Styles.title}>بر اساس تخصص</h1>

      <div className={Styles.list}>
        <a href="#" className={Styles.item}>
          <Doctor />
          <span className={Styles.name}>ارتوپد</span>
        </a>

        <a href="#" className={Styles.item}>
          <Doctor />
          <span className={Styles.name}>روانپزشکی</span>
        </a>

        <a href="#" className={Styles.item}>
          <Doctor />
          <span className={Styles.name}>ریه</span>
        </a>

        <a href="#" className={Styles.item}>
          <Doctor />
          <span className={Styles.name}>عفونی</span>
        </a>

        <a href="#" className={Styles.item}>
          <Doctor />
          <span className={Styles.name}>مغز و اعصاب</span>
        </a>

        <a href="#" className={Styles.item}>
          <Doctor />
          <span className={Styles.name}>تغذیه</span>
        </a>

        <a href="#" className={Styles.item}>
          <Doctor />
          <span className={Styles.name}>پوست و مو</span>
        </a>

        <a href="#" className={Styles.item}>
          <Doctor />
          <span className={Styles.name}>اطفال</span>
        </a>

        <a href="#" className={Styles.item}>
          <Doctor />
          <span className={Styles.name}>کلیه</span>
        </a>

        <a href="#" className={Styles.item}>
          <Doctor />
          <span className={Styles.name}>معده و گوارش</span>
        </a>
      </div>
    </div>
  );
}
