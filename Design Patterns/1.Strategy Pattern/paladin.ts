import {Soldier} from "./soldier";

export class Paladin extends Soldier {

	constructor(props) {
		super();
		this.refillBehaviour = props.refillBehaviour;
		this.repairBehaviour = props.repairBehaviour;
	}
	fight() {
		console.log('Paladin is fighting');
	}

	move() {
		console.log('Paladin is moving');
	}
	refill() {
		return this.refillBehaviour.refill();
	}

	repair() {
		return this.repairBehaviour.repair();
	}
}
