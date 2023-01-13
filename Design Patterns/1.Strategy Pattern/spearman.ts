import {Soldier} from "./soldier";

export class Spearman extends Soldier {

	constructor(props) {
		super();
		this.refillBehaviour = props.refillBehaviour;
		this.repairBehaviour = props.repairBehaviour;
	}
	fight() {
		console.log('Spearman is fighting');
	}
	move() {
		console.log('Spearman is moving');
	}

	refill() {
		return this.refillBehaviour.refill();
	}

	repair() {
		return this.repairBehaviour.repair();
	}
}
