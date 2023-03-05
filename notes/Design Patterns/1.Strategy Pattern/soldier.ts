import { IRefillableStrategy } from './strategy/refill/refillable.strategy';
import { IRepairableStrategy } from './strategy/repair/repairable.strategy';

export abstract class Soldier {
	abstract fight(): string;
	abstract move(): string;
	refillBehaviour: IRefillableStrategy;
	repairBehaviour: IRepairableStrategy;
}
