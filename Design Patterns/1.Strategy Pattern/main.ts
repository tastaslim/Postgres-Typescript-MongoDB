import {Soldier} from "./soldier";

export class ExposedToClient {
	private soldier: Soldier;
	constructor(soldier: Soldier) {
		this.soldier = soldier;
	}
	fight() {
		this.soldier.fight();
	}
	move() {
		this.soldier.move();
	}
	refill() {
		return this.soldier.refillBehaviour.refill();
	}

	repair() {
		return this.soldier.repairBehaviour.repair();
	}
}
