import { describe, expect, it } from "vitest";
import { BetterFilter, Color, Filter, FilterSpec, Size } from "../solid/open-closed";
import makeProducts from "./mocks/products";

describe("Open Closed Principle", () => {
  const products = makeProducts();

  it("should filter products by size", () => {
    const filter = Filter.filterBySize(products, Size.large);

    expect(filter.every((el) => el.size === Size.large)).toBe(true);
  });

  it("should filter products by color", () => {
    const filter = Filter.filterByColor(products, Color.blue);

    expect(filter.every((el) => el.color === Color.blue)).toBe(true);
  });

  describe("BetterFilter should work", () => {
    it("should filter products by spec", () => {
      const spec = new FilterSpec(Color.blue, "color");
      const filter = BetterFilter.filter(products, spec);

      expect(filter.every((el) => el.color === Color.blue)).toBe(true);
    });

    it("should filter products by multiple specs", () => {
      const colorSpec = new FilterSpec(Color.blue, "color");
      const sizeSpec = new FilterSpec(Size.large, "size");

      const filter = BetterFilter.filter<Color | Size>(products, [colorSpec, sizeSpec]);

      expect(
        filter.every((el) => el.color === Color.blue && el.size === Size.large)
      ).toBe(true);
    });
  });
});
