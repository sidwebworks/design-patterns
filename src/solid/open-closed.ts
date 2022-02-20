enum Color {
  red = "red",
  green = "green",
  blue = "blue",
}

enum Size {
  small = "small",
  medium = "medium",
  large = "large",
}

class Product {
  constructor(public name: string, public color: Color, public size: string) {}
}

class Filter {
  static filterByColor(products: Product[], color: Color) {
    return products.filter((el) => el.color === color);
  }

  static filterBySize(products: Product[], size: Size) {
    return products.filter((el) => el.size === size);
  }
}

/** --------------------------------------------------------- **/

class BetterFilter {
  static filter<C>(products: Product[], spec: FilterSpec<C> | FilterSpec<C>[]) {
    if (Array.isArray(spec)) {
      return products.filter((el) => spec.every((sp) => sp.isSatisfied(el)));
    }
    return products.filter((el) => spec.isSatisfied(el));
  }
}

class FilterSpec<T> {
  constructor(private constrain: T, private field: string) {}

  isSatisfied(item: Product) {
    return item[this.field] === this.constrain;
  }
}

export { Filter, Product, Color, Size, FilterSpec, BetterFilter };
