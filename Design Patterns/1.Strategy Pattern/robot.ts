import {Soldier} from "./soldier";

export class Robot extends Soldier {

	constructor(props) {
		super();
		this.refillBehaviour = props.refillBehaviour;
		this.repairBehaviour = props.repairBehaviour;
	}
	fight() {
		console.log('Robot is fighting');
	}
	move() {
		console.log('Robot is moving');
	}
	refill(){
		return this.refillBehaviour.refill();
	}
	repair(){
		return this.repairBehaviour.repair();
	}
}
