import { PathData } from "./PathData";

describe("PathData", () => {
  test("getNumbers", () => {
    const data = new PathData("M20,19.5c3.62,1.47,8.62,5.38,10.25,8.34");
    const parts = data.getElements();

    expect(parts[0]).toBe("M");
    expect(parts[1]).toBe(20);
    expect(parts[2]).toBe(19.5);
    expect(parts[3]).toBe("c");
    expect(parts[4]).toBe(3.62);
    expect(parts[5]).toBe(1.47);
    expect(parts[6]).toBe(8.62);
    expect(parts[7]).toBe(5.38);
    expect(parts[8]).toBe(10.25);
    expect(parts[9]).toBe(8.34);
  });
  test("ElementsToString", () => {
    const path = "M20,19.5c3.62,1.47,8.62,5.38,10.25,8.34";
    const data = new PathData("M20,19.5c3.62,1.47,8.62,5.38,10.25,8.34");
    const parts = data.getElements();
    const result = data.ElementsToString(parts);
    expect(result).toBe(path);
  });
});
