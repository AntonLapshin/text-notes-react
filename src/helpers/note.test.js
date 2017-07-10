import { getMax, getUID } from "./note";

describe("note", () => {
  it("getMax should return max value", () => {
    const items = [
      {
        id: 0
      },
      {
        id: 3
      }
    ];
    expect(getMax(items, item => item.id)).toBe(3);
  });

  it("getUID should return unique id", () => {
    const items = [
      {
        id: 0
      },
      {
        id: 3
      }
    ];
    expect(getUID(items)).toBe(4);
  });  
});
