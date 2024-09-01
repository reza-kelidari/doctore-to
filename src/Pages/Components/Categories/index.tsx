import Doctor from "../../../Icons/Doctor";
import Styles from "./styles.module.scss";
import { CategoriesType, Category } from "./types";

/**
 * This component renders a list of categories for
 * Home page
 *
 * @returns {JSX.Element}
 */
export default function Categories(): JSX.Element {
  /**
   * An array that contains list of categories
   */
  const categories: CategoriesType = [
    { name: "ارتوپد", icon: Doctor, link: "#" },
    { name: "روانپزشکی", icon: Doctor, link: "#" },
    { name: "ریه", icon: Doctor, link: "#" },
    { name: "عفونی", icon: Doctor, link: "#" },
    { name: "مغز و اعصاب", icon: Doctor, link: "#" },
    { name: "تغذیه", icon: Doctor, link: "#" },
    { name: "پوست و مو", icon: Doctor, link: "#" },
    { name: "اطفال", icon: Doctor, link: "#" },
    { name: "کلیه", icon: Doctor, link: "#" },
    { name: "معده و گوارش", icon: Doctor, link: "#" },
  ];

  return (
    <div className={Styles.categories}>
      <h1 className={Styles.title}>بر اساس تخصص</h1>

      <div className={Styles.list}>
        {categories.map((category: Category) => (
          <a href={category.link} className={Styles.item}>
            {<category.icon />}
            <span className={Styles.name}>{category.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
