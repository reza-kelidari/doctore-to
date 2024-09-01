import Styles from "./styles.module.scss";

/**
 * This component renders TopBar for Home page
 *
 * @returns {JSX.Element}
 */
export default function TopBar(): JSX.Element {
  return (
    <div className={Styles.topBar}>
      <div className={Styles.details}>
        <h1 className={Styles.title}>نزدیک ترین دکتر به خودت رو پیدا کن</h1>
        <h3 className={Styles.subTitle}>
          یا وقت ملاقات بگیر، یا انلاین ویزیت شو
        </h3>

        <div className={Styles.searchBar}>
          <h3 className={Styles.title}>تخصص مورد نیازت رو جستجو کن</h3>

          <form action="#" className={Styles.form}>
            <input type="text" autoComplete="false" placeholder="ارتوپد" />
            <button className={Styles.button} type="submit">
              جستجو
            </button>
          </form>
        </div>
      </div>

      <img
        src="/topbar_banner.png"
        alt="Top Bar banner"
        className={Styles.banner}
      />
    </div>
  );
}
