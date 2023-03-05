import {NotificationObserver} from "./notification.observer";
// import {StockObservable} from "../observable/stock.observable";

export class SMSObserver implements NotificationObserver{
	private phoneNumber:number;

	constructor( phoneNumber: number) {
		this.phoneNumber =phoneNumber;
	}
	update(): void {
		this.sendSMS(this.phoneNumber, '')
	}

	sendSMS(phoneNumber:number, message: string){
		console.log(`SMS sent to ${phoneNumber} with message ${message}`)
	}

}
