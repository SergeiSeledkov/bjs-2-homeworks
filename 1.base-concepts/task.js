"use strict";

function solveEquation(a, b, c) {
  let arr;
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    let x = -b / (2 * a);
    arr = [x];
  } else {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr = [x1, x2];
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  //Попытка перевода в числа
  let percentVerified = parseInt(percent);
  let contributionVerified = parseInt(contribution);
  let amountVerified = parseInt(amount);

  if (isNaN(percentVerified) === true) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contributionVerified) === true) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amountVerified) === true) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else {
    //Тело кредита
    let creditBody = amountVerified - contributionVerified;
    let dateToday = +new Date();
    //Срок кредита
    let creditTerm = (+date - dateToday) / 1000 / 60 / 60 / 24 / 30.4;

    if (creditTerm < 0) {
      totalAmount = 'Дата выбрана неверно! Текущий день позже выбранной даты';
    } else {
      //Отбрасывание чисел до первого знака после запятой
      creditTerm = Math.floor(creditTerm * 10) / 10;
      //Округление
      creditTerm = Math.ceil(creditTerm);

      //Процент в месяц
      let percentVerifiedInMonth = percentVerified / 100 / 12;
      //Сумма ежемесячного платежа
      let monthlyPayment = creditBody * (percentVerifiedInMonth + percentVerifiedInMonth / (((1 + percentVerifiedInMonth) ** creditTerm) - 1));
      //Общая сумма выплат
      let fullPayment = monthlyPayment * creditTerm;

      fullPayment = fullPayment.toFixed(2);
      totalAmount = +fullPayment;

      console.log(totalAmount);
    }

  }

  return totalAmount;
}