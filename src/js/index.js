'use strict';

class BodyType {
	#bodyType
	#bodyYear

	constructor( bodyType, bodyYear ) {
		this.#bodyType = bodyType
		this.#bodyYear = bodyYear
	}
}

class Vehicle extends BodyType {
	#wheelsNums

	constructor( bodyType, bodyYear, wheelsNums ) {
		super( bodyType, bodyYear )

		this.#wheelsNums = wheelsNums
	}

	startEngine() {
		console.log( 'start engine: ', this );
	}

	stopEngine() {
		console.log( 'stop engine: ', this );
	}

	getInfo() {
		console.log( 'get info from Vechile: ', this );
	}
}

class Mercedes extends Vehicle {
	#brand
	#HP
	#color

	constructor( bodyType, bodyYear, wheelsNums, brand, HP, color ) {
		super( bodyType, bodyYear, wheelsNums );
		this.#brand = brand
		this.#HP = HP
		this.#color = color
	}

	getColor() {
		return this.#color
	}

	getBrand() {
		return this.#brand
	}

	getHP() {
		return this.#HP
	}
}

class BMW extends Vehicle {
	#brand
	#HP
	#color

	constructor( bodyType, bodyYear, wheelsNums, brand, HP, color ) {
		super( bodyType, bodyYear, wheelsNums );
		this.#brand = brand
		this.#HP = HP
		this.#color = color
	}

	get color() {
		return this.#color
	}

	set color( val ) {
		switch ( val.trim().toLowerCase() ) {
			case 'white':
				this.#color = val
				break
			case 'red':
				this.#color = val
				break
			case 'blue':
				this.#color = val
				break
			default:
				throw new Error('Color isn\'t chosen white, red and blue')
		}
	}

	get HP() {
		console.log( "GETTER" );
		return this.#HP
	}

	set HP( hp ) {
		console.log( "SETTER" );
		if ( hp > 270 && hp < 320 ) {
			this.#HP = hp
			return
		}
		throw new Error( "hp должен быть больше 270 и меньше 320ти" )
	}
}

const mercedes = new Mercedes(
	'coupe',
	2020,
	4,
	'Mercedes-benz',
	318,
	'black' )

const bmw = new BMW(
	'coupe',
	2021,
	4,
	'BMW',
	270,
	'white' )

console.log( bmw.color )
bmw.color = '   Red'
console.log( bmw.color )
bmw.color = '   RedDdf'
