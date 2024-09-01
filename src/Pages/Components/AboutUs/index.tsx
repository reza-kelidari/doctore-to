import Done from "../../../Icons/Done";
import Styles from "./styles.module.scss";

/**
 * This component renders about us section for Home page
 *
 * @returns {JSX.Element}
 */
export default function AboutUs(): JSX.Element {
  return (
    <div className={Styles.aboutUs}>
      <div className={Styles.details}>
        <h3 className={Styles.subTitle}>پزشکان با تجربه ای که</h3>
        <h1 className={Styles.title}>مشکل ات براشون مهمه</h1>
        <br />
        <h3 className={Styles.subTitle}>
          نزدیک ترین دکتر موردنظر ات رو پیدا کن،
        </h3>
        <h3 className={Styles.subTitle}>وقت مراجعه بگیر، یا آنلاین ویزیت شو</h3>
        <br />
        <div className={Styles.points}>
          <div className={Styles.point}>
            <Done />
            <span className={Styles.title}>سریعترین نوبت های مراجعه حضوری</span>
          </div>

          <div className={Styles.point}>
            <Done />
            <span className={Styles.title}>ویزیت آنلاین بدون زمان انتظار </span>
          </div>

          <div className={Styles.point}>
            <Done />
            <span className={Styles.title}>کمترین هزینه ویزیت</span>
          </div>

          <div className={Styles.point}>
            <Done />
            <span className={Styles.title}>
              بازگشت وجه در صورت نارضایتی تا 48 ساعت
            </span>
          </div>
        </div>
      </div>

      <img src="/portrait.png" alt="Portrait" className={Styles.portrait} />
    </div>
  );
}
