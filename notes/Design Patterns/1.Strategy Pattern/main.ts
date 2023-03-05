import { Soldier } from './soldier';

export class ExposedToClient {
	private soldier: Soldier;
	constructor(soldier: Soldier) {
		this.soldier = soldier;
	}
	fight(): string {
		return this.soldier.fight();
	}
	move(): string {
		return this.soldier.move();
	}
	refill() {
		return this.soldier.refillBehaviour.refill();
	}

	repair() {
		return this.soldier.repairBehaviour.repair();
	}
}
