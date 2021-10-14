/* --- Task 1 --- */

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		return this.state *= 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}

/* --- Task 2 --- */

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		const searchIndex = this.books.find(findObject => (findObject[type] === value));
		if (searchIndex === undefined) {
			return null;
		} else {
			return searchIndex;
		}
	}

	giveBookByName(bookName) {
		const searchBook = this.findBookBy('name', bookName);
		if (searchBook !== null) {
			const searchIndexToDelete = this.books.findIndex(findObject => (findObject.name === searchBook.name));
			this.books.splice(searchIndexToDelete, 1);
		}

		return searchBook;
	}
}

/* --- Task 3 --- */

class Student {
	constructor(name, gender, age) {
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.subjects = null;
	}

	addMark(mark, subject) {
		if (mark < 1 || mark > 5 || typeof(mark) !== 'number') {
			return console.log("Ошибка, оценка должна быть числом от 1 до 5");
		} else {
			if (this.subjects === null) {
				this.subjects = {[subject]: [mark]};
			} else if (this.subjects[subject] === undefined) {
				this.subjects[subject] = [mark];
			} else {
				this.subjects[subject].push(mark);
			}
		}
	}

	getAverage() {
		let sumMark = 0;
		let sumLengthArray = 0;

		if (this.subjects === null) {
			return "Нет ни одной оценки";
		} else {
			for (let key in this.subjects) {
				sumMark += this.subjects[key].reduce((sum, item) => sum += item);
				sumLengthArray += this.subjects[key].length;
			}

			let result = +(sumMark / sumLengthArray).toFixed(2);
  		
  			return result;
		}
	}

	getAverageBySubject(subject) {
		if (this.subjects[subject] === undefined) {
			return console.log("Несуществующий предмет");
		} else {
			let result = this.subjects[subject].reduce((sum, item) => sum += item, 0);
			result = +(result / this.subjects[subject].length).toFixed(1);

			return result;
		}
	}

	exclude(reason) {
		delete this.subjects;

  		this.excluded = reason;
	}
}