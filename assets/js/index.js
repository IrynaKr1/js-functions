// 1
function isWorkingAgePerson(age) {
  return age >= 16 && age <= 64 ? true : false;
}

// 2
function checkMultiplicity(num1, num2) {
  return num1 % num2 === 0 ? true : false;
}

//3
const isTriangle = function (a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    if (a + b > c && a + c > b && b + c > a) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

