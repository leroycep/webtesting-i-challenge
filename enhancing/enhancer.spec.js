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

    it("should max out at level 20", () => {
      const item = {
        name: "Diamond Pick",
        durability: 50,
        enhancement: 20,
      };

      const enhanced = enhancer.succeed(item);

      expect(enhanced.enhancement).toBe(20);
    });

    it("should not affect durability", () => {
      const item = {
        name: "Diamond Pick",
        durability: 50,
        enhancement: 20,
      };

      const enhanced = enhancer.succeed(item);

      expect(enhanced.durability).toBe(item.durability);
    });
  });

  describe("fail", () => {
    it("should decrease durability by 5 for items less than enhancement 15", () => {
      const item = {
        name: "Diamond Pick",
        durability: 50,
        enhancement: 10,
      };

      const enhanced = enhancer.fail(item);

      expect(enhanced.durability).toBe(item.durability - 5);
    });

    it("should decrease durability by 10 for items enhancement 15 or more", () => {
      const item = {
        name: "Diamond Pick",
        durability: 50,
        enhancement: 17,
      };

      const enhanced = enhancer.fail(item);

      expect(enhanced.durability).toBe(item.durability - 10);
    });

    it("should decrease enhancement by 1 for items enhancement 16 or more", () => {
      const item = {
        name: "Diamond Pick",
        durability: 50,
        enhancement: 17,
      };

      const enhanced = enhancer.fail(item);

      expect(enhanced.enhancement).toBe(item.enhancement - 1);
    });
  });
});
