module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let level = item.enhancement;
  if (level < 20) {
    level += 1;
  }
  return { ...item, enhancement: level };
}

function fail(item) {
  if (item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 };
  } else {
    return {
      ...item,
      enhancement: item.enhancement - 1,
      durability: item.durability - 10,
    };
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return {
    ...item,
    name:
      item.enhancement > 0 ? `[+${item.enhancement}] ${item.name}` : item.name,
  };
}
