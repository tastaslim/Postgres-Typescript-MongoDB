import { Soldier } from './soldier';

export class Robot extends Soldier {
	constructor(props) {
		super();
		this.refillBehaviour = props.refillBehaviour;
		this.repairBehaviour = props.repairBehaviour;
	}
	fight(): string {
		return 'Robot is fighting';
	}
	move(): string {
		return 'Robot is moving';
	}
	refill() {
		return this.refillBehaviour.refill();
	}
	repair() {
		return this.repairBehaviour.repair();
	}
}
