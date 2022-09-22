import { stringify } from "./task";
describe("json", () => {
  describe("JSON.stringify", () => {
    it("stringify just string", () => {
      const x = "some string";
      const actual = stringify(x);
      expect(actual).toEqual(JSON.stringify(x));
    });

    it("stringify string with number value", () => {
      const x = "10";
      const actual = stringify(x);
      expect(actual).toEqual(JSON.stringify(x));
    });

    it("stringify just number", () => {
      const x = 10;
      const actual = stringify(x);
      expect(actual).toEqual(JSON.stringify(x));
    });

    it("stringify just float number", () => {
      const x = 10.43;
      const actual = stringify(x);
      expect(actual).toEqual(JSON.stringify(x));
    });

    it("stringify just boolean", () => {
      const x = true;
      const actualX = stringify(x);
      expect(actualX).toEqual(JSON.stringify(x));

      const y = false;
      const actualY = stringify(y);
      expect(actualY).toEqual(JSON.stringify(y));
    });

    it("stringify just undefined", () => {
      const x = undefined;
      const actual = stringify(x);
      expect(actual).toEqual(JSON.stringify(x));
    });

    it("stringify just null", () => {
      const x = null;
      const actual = stringify(x);
      expect(actual).toEqual(JSON.stringify(x));
    });

    it("stringify empty object", () => {
      const x = {};
      const actual = stringify(x);
      expect(actual).toEqual(JSON.stringify(x));
    });

    it("stringify flat object", () => {
      const x = {
        foo: "foo",
        bar: 10,
      };
      const actual = stringify(x);
      expect(actual).toEqual(JSON.stringify(x));
    });

    it("stringify nested object", () => {
      const x = {
        foo: "foo",
        bar: 10,
        nested: {
          foo: "foo",
          bar: 10,
        },
      };
      const actual = stringify(x);
      expect(actual).toEqual(JSON.stringify(x));
    });
  });
});
