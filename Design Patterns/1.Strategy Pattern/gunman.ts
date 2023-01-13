import {Soldier} from "./soldier";

export class Gunman extends Soldier {
	constructor(props) {
		super();
		this.refillBehaviour = props.refillBehaviour;
		this.repairBehaviour = props.repairBehaviour;
	}
	fight() {
		console.log('Gunman is fighting');
	}

	move() {
		console.log('Gunman is moving');
	}
	refill() {
		return this.refillBehaviour.refill();
	}

	repair() {
		return this.repairBehaviour.repair();
	}
}
