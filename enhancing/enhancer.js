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
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
