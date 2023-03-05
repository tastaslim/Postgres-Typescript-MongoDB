import {Soldier} from "./soldier";

export class Superhero extends Soldier {
	constructor(props) {
		super();
		this.refillBehaviour = props.refillBehaviour;
		this.repairBehaviour = props.repairBehaviour;
	}

	fight():string {
		return 'Superhero is fighting';
	}
	move():string {
		return 'Superhero is moving';
	}

	refill() {
		console.log('Superhero is refilling');
		return this.refillBehaviour.refill();
	}

	repair() {
		return this.repairBehaviour.repair();
	}
}
