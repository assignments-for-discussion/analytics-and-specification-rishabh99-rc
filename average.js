
function average(numbers) {
  const filNums = numbers.filter(function (num) {
     return !Number.isNaN(num);
   });
   return filNums.reduce((p, c)=> p + c, 0) / filNums.length;
}

module.exports = {average};
