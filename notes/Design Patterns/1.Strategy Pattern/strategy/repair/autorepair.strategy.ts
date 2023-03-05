import {IRepairableStrategy} from "./repairable.strategy";

export class AutoRepairStrategy implements IRepairableStrategy{
	repair(){
		console.log('Auto repairing');
	}
}
