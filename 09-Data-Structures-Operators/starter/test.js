const numbers = [15.5, 2.3, 1.1, 4.7];

numbers.reduce(getSum, 10);

function getSum(total, num) {
  console.log(total, num, Math.round(num));
  return total + Math.round(num);
}
