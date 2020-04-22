const enhancer = require("./enhancer.js");
// test away!

describe("enhancer", () => {
  describe("repair", () => {
    it("should set object's durability to 100", () => {
      const item = {
        name: "Totem of Undying",
        durability: 4,
        enchancement: 1,
      };

      const repaired = enhancer.repair(item);

      expect(repaired.durability).toBe(100);
    });
  });

  describe("succeed", () => {
    it("should increase enchancement by one", () => {
        const item = {
            name: "Diamond Pick",
            durability: 50,
            enhancement: 1,
        };

        const enhanced = enhancer.succeed(item);

        expect(enhanced.enhancement).toBe(2);
    });
    it.todo("should max out at level 20");
    it.todo("should not affect durability");
  });

  describe("fail", () => {
    it.todo(
      "should decrease durability by 5 for items less than enhancement 15"
    );
    it.todo(
      "should decrease durability by 10 for items enhancement 15 or more"
    );
    it.todo(
      "should decrease enhancement by 1 for items enhancement 16 or more"
    );
  });
});
