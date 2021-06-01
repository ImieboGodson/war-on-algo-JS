## Primary Objective

Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.


Note:

- Round up your answers to 4 decimal places (hint: use the toFixed method)
- C = (F - 32) x 5/9; (e.g 0deg F = -17.7778 deg C)
- if the parameter passed is not a number or a string that can be converted to a valid number, return a string with the format below:
    `${parameter} is not a valid number but a/an ${parameter's type}.`
You can use the following cases as guides:

- convertFahrToCelsius(0) should return `-17.7778`
- convertFahrToCelsius("0") should return `-17.7778`
- convertFahrToCelsius([1,2,3]) should return `[1,2,3] is not a valid number but a/an array.`
- convertFahrToCelsius({temp: 0}) should return `{"temp": 0} is not a valid number but a/an object.`