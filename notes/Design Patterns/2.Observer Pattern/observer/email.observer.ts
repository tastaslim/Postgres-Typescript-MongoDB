import {NotificationObserver} from "./notification.observer";
// import {StockObservable} from "../observable/stock.observable";

export class EmailObserver implements NotificationObserver{
	private email:string;

	constructor(email: string) {
		this.email =email;
	}
	update(): void {
		this.sendEmail(this.email, '')
	}

	sendEmail(email:string, message: string){
		console.log(`Email sent to ${this.email} with message ${message}`)
	}

}
