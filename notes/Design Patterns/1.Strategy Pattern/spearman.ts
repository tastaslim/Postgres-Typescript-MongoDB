import { Soldier } from './soldier';
import { IRefillableStrategy } from './strategy/refill/refillable.strategy';
import { IRepairableStrategy } from './strategy/repair/repairable.strategy';

export class Spearman extends Soldier {
	constructor(props: { refillBehaviour: IRefillableStrategy; repairBehaviour: IRepairableStrategy }) {
		super();
		this.refillBehaviour = props.refillBehaviour;
		this.repairBehaviour = props.repairBehaviour;
	}
	fight(): string {
		return 'Spearman is fighting';
	}
	move(): string {
		return 'Spearman is moving';
	}

	refill() {
		return this.refillBehaviour.refill();
	}

	repair() {
		return this.repairBehaviour.repair();
	}
}
