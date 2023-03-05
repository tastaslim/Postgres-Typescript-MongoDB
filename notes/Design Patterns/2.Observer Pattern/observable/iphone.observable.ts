import {StockObservable} from "./stock.observable";
import {NotificationObserver} from "../observer/notification.observer";

export class IphoneObservable implements StockObservable{
  private totalStocks=0;
	private subscribers:Array<NotificationObserver> = [];
	addSubscriber(observer: NotificationObserver){
		this.subscribers.push(observer);
	}

	removeSubscriber(observer: NotificationObserver){
		this.subscribers = this.subscribers.filter(obs => obs!=observer);
	}

	notifySubscriber(){
		console.log(this.subscribers);
		// this.subscribers.forEach(observer => observer.update());
		for(const subscriber of this.subscribers){
			subscriber.update();
		}
	}

	getStockCount():number {
		return this.totalStocks;
	}

	setStockCount(newStock: number):void {
		if(this.getStockCount() == 0){ // When Iphone is out of Stock on Flipkart/Amazon and new stock comes
			this.notifySubscriber();
		}
		this.totalStocks = newStock;
	}
}
