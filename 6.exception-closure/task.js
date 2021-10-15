/* ---TASK 1--- */

function parseCount(inputValue) {
	const parseInputValue = Number.parseInt(inputValue, 10);

	if (isNaN(parseInputValue)) {
		const validError = new Error("Невалидное значение");
		throw validError;
	}
	
	return parseInputValue;
}

function validateCount(inputValue) {
	try {
		return parseInputValue = parseCount(inputValue);
	} catch(err) {
		return err;
	}
}

/* ---TASK 2--- */

class Triangle {
	constructor(a, b, c) {
		if ((a + b) < c || (a + c) < b || (b + c) < a) {
			const triangleError = new Error("Треугольник с такими сторонами не существует");
			throw triangleError;
		} else {
			this.a = a;
			this.b = b;
			this.c = c;
		}
	}

	getPerimeter() {
		return this.a + this.b + this.c;
	}

	getArea() {
		const semiPerimeter = this.getPerimeter() / 2;
		const areaTriangle = Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c));
		return +areaTriangle.toFixed(3);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch(err) {
		return {getPerimeter: () => "Ошибка! Треугольник не существует", getArea: () => "Ошибка! Треугольник не существует"};
	}
}