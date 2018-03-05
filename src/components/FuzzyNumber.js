export default class FuzzyNumber {
	constructor(name, a1, a0, a2) {
		const X = [a1, a0, a2].map(Number).sort((a, b) => a - b)
		this.name = name
		this.x1 = X[0]
		this.x2 = X[1]
		this.x3 = X[2]
	}

	replaceNum(num, value) {
		this[num] = Number(value)

		return this
	}

	toString() {
		return `[${this.x1}; ${this.x2}; ${this.x3}]`
	}

	toStringRules(str) {
		const strFor = str || ", при"
		return [
			`0${strFor} x <= ${this.x1} ∪ x >= ${this.x3}`,
			`(x - ${this.x1}) / ${this.x2 - this.x1}${strFor} ${this.x1} < x <= ${this.x2}`,
			`(${this.x3} - x) / ${this.x3 - this.x2}${strFor} ${this.x2} < x < ${this.x3}`
		]
	}

	toAlpha() {
		return `[${this.x1} + ${this.x2 - this.x1}α, ${this.x3} - ${this.x3 - this.x2}α]`;
	}

	alpha(x) {
		return ((x <= this.x1) || (x >= this.x3)) ? 0 :
			((this.x1 < x) && (x <= this.x2)) ?  (x - this.x1) / (this.x2 - this.x1) :
			((this.x2 < x) && (x < this.x3)) ? (this.x3 - x) / (this.x3 - this.x2) : false;
	}

	add(B) {
		return new FuzzyNumber(names[numbers++], this.x1 + B.x1, this.x2 + B.x2,  this.x3 + B.x3);
	}
}

let numbers = 2
const names = ("abcdefghijklmnopqrstuvwxyz").split("").map(l => l.toUpperCase())