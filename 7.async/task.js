class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}

	addClock(time, actionFunction, alarmId) {
		if (alarmId === undefined) {
			throw new Error('Невозможно идентифицировать будильник. Параметр id не передан');
		}
		else if (this.alarmCollection.some(item => item.id === alarmId)) {
			return console.error('Будильник с таким id уже существует');
		} else {
			return this.alarmCollection.push({id:alarmId, time:time, callback:actionFunction});
		}
	}

	removeClock(alarmId) {
		const findAlarmId = this.alarmCollection.findIndex(item => item.id === alarmId);
		if (findAlarmId === -1) {
			return false;
		} else {
			this.alarmCollection.splice(findAlarmId, 1);
			return true;
		}
	}

	getCurrentFormattedTime() {
		const nowDate = new Date();
		const nowHours = (nowDate.getHours() < 10) ? `0${nowDate.getHours()}` : `${nowDate.getHours()}`;
		const nowMinutes = (nowDate.getMinutes() < 10) ? `0${nowDate.getMinutes()}` : `${nowDate.getMinutes()}`;

		return `${nowHours}:${nowMinutes}`;
	}

	start() {
		const saveThis = this;
		function checkClock(inputAlarm) {
			if (inputAlarm.time === saveThis.getCurrentFormattedTime()) {
				inputAlarm.callback();
			}
		}

		if (this.timerId === null) {
			this.timerId = setInterval(() => this.alarmCollection.forEach(item => checkClock(item)), 1000);
		}
	}

	stop() {
		if (this.timerId !== null) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}

	printAlarms() {
		console.log(`Печать всех будильников, в количестве: ${this.alarmCollection.length}`);
		this.alarmCollection.forEach(item => console.log(`Будильник №${item.id} заведён на ${item.time}`));
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}