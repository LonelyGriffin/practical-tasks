import { clodeDeep } from "./tack";
import _ from "lodash";

describe("cloneDeep", () => {
  it("clone just string", () => {
    const x = "some string";
    const actual = clodeDeep(x);
    expect(actual).toEqual(_.cloneDeep(x));
  });

  it("clone string with number value", () => {
    const x = "10";
    const actual = clodeDeep(x);
    expect(actual).toEqual(_.cloneDeep(x));
  });

  it("clone just number", () => {
    const x = 10;
    const actual = clodeDeep(x);
    expect(actual).toEqual(_.cloneDeep(x));
  });

  it("clone just float number", () => {
    const x = 10.43;
    const actual = clodeDeep(x);
    expect(actual).toEqual(_.cloneDeep(x));
  });

  it("clone just boolean", () => {
    const x = true;
    const actualX = clodeDeep(x);
    expect(actualX).toEqual(_.cloneDeep(x));

    const y = false;
    const actualY = clodeDeep(y);
    expect(actualY).toEqual(_.cloneDeep(y));
  });

  it("clone just undefined", () => {
    const x = undefined;
    const actual = clodeDeep(x);
    expect(actual).toEqual(_.cloneDeep(x));
  });

  it("clone just null", () => {
    const x = null;
    const actual = clodeDeep(x);
    expect(actual).toEqual(_.cloneDeep(x));
  });

  it("clone empty object", () => {
    const x = {};
    const actual = clodeDeep(x);
    expect(actual).toEqual(_.cloneDeep(x));
  });

  it("clone flat object", () => {
    const x = {
      foo: "foo",
      bar: 10,
    };
    const actual = clodeDeep(x);
    expect(actual).toEqual(_.cloneDeep(x));
  });

  it("clone nested object", () => {
    const x = {
      foo: "foo",
      bar: 10,
      nested: {
        foo: "foo",
        bar: 10,
      },
    };
    const actual = clodeDeep(x);
    expect(actual).toEqual(_.cloneDeep(x));
  });
});
