// 1
function isWorkingAgePerson(age) {
  return age >= 16 && age <= 64 ? true : false;
}

// 2
function checkMultiplicity(num1, num2) {
  return num1 % num2 === 0 ? true : false;
}

// 3
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

// 4

const triangleArea = function (base, height) {
  if (base > 0 && height > 0) {
    return 0.5 * base * height;
  } else {
    return 'Error: the sides must be positive numbers.';
  }
};

function coneSurfaceArea(radius, slantHeight) {
  if (radius > 0 && slantHeight > 0) {
    return Math.PI * radius * slantHeight;
  } else {
    return 'Error: the sides must be positive numbers.';
  }
}

// 5

function isPrimeNumber(number) {
  if (number <= 1) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) return false;
  }

  return true;
}

console.log(isPrimeNumber(2)); 
console.log(isPrimeNumber(4)); 
console.log(isPrimeNumber(17)); 
console.log(isPrimeNumber(1)); 
console.log(isPrimeNumber(97));
