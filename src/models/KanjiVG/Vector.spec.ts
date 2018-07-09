import { Vector } from "./Vector";

describe("Vector", () => {
  test("cosineSimilarity Right angle", () => {
    let vec1 = new Vector(0, 1);  //垂直
    let vec2 = new Vector(1, 0);  //水平
    let sim = vec1.cosineSimilarity(vec2);  //直角
    expect(sim).toBe(0)
  });
  test("cosineSimilarity Right angle diff length", () => {
    let vec1 = new Vector(0, 2);  //垂直
    let vec2 = new Vector(1, 0);  //水平
    let sim = vec1.cosineSimilarity(vec2);  //直角
    expect(sim).toBe(0)
  });
  test("cosineSimilarity Same", () => {
    let vec1 = new Vector(0, 2);  //垂直
    let vec2 = new Vector(0, 1);  //垂直
    let sim = vec1.cosineSimilarity(vec2);  //直角
    expect(sim).toBe(1)
  });
  test("cosineSimilarity Opposite", () => {
    let vec1 = new Vector(0, 2);  //垂直
    let vec2 = new Vector(0, -1);  //垂直
    let sim = vec1.cosineSimilarity(vec2);  //直角
    expect(sim).toBe(-1)
  });

  test("cosineSimilarity 45D", () => {
    let vec1 = new Vector(0, 1);  //垂直
    let vec2 = new Vector(1, 1);  //45°
    let sim = vec1.cosineSimilarity(vec2);  //直角
    expect(sim).toBeCloseTo(0.707, 3);  //cos 45°
  });

  test("cosineSimilarity 45D diff length", () => {
    let vec1 = new Vector(0, 11);  //垂直
    let vec2 = new Vector(4, 4);  //45°
    let sim = vec1.cosineSimilarity(vec2);  //直角
    expect(sim).toBeCloseTo(0.707, 3);  //cos 45°
  });

  test("cosineSimilarity 135D diff length", () => {
    let vec1 = new Vector(0, 11);  //垂直
    let vec2 = new Vector(4, -4);  //45°
    let sim = vec1.cosineSimilarity(vec2);  //直角
    expect(sim).toBeCloseTo(-0.707, 3);  //cos 45°
  });

});
