/**
 * An array that contains list of categories
 */
export type CategoriesType = Array<Category>;

/**
 * Represents shape of a category
 */
export interface Category {
  /**
   * Category name
   */
  name: string;

  /**
   * Category icon
   * @returns {() => JSX.Element}
   */
  icon: () => JSX.Element;

  /**
   * Category link
   */
  link: string;
}
