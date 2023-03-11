function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

console.log(count); //此处在utils/math.js中打印，肯定会报错

export { add, sub };
