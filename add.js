console.log("i am add file!!!");
const add = (a, b) => {
  a = Number(a);
  b = Number(b);

  if (isNaN(a) || isNaN(b)) {
    console.error("> type error");
    return;
  }
  return a + b;
};

const args = process.argv.slice(2, 4);
console.log(add(...args));
