import { Component } from '@angular/core';
import { IonicPage, ModalController, LoadingController, NavParams, ToastController, AlertController, NavController } from 'ionic-angular';
import { MenuFoods } from '../../models/interfaces';
import { MenuService } from '../../providers/menu-service/menu-service';
import { FavoritesProvider } from '../../providers/favorites/favorites';
import { finalize } from 'rxjs/operators';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';
import { Network } from '@ionic-native/network';
// import { NetworkService, ConnectionStatus } from '../../providers/network-detection/network-detection';

enum ConnectionStatus {
  Online,
  Offline
}

@IonicPage()
@Component({
  selector: 'page-dishday',
  templateUrl: 'dishday.html',
})
export class DishdayPage {


  dishDayRef: MenuFoods[] = [];
  dishDay: string = 'DishDay';
  connection: string;
  private status: BehaviorSubject<ConnectionStatus> = new BehaviorSubject(ConnectionStatus.Offline);
  offline$: Subscription;
  online$: Subscription;
  onChange$: Subscription;

  constructor(public loadingCtrl: LoadingController, private service: MenuService, private modalCtrl: ModalController, public favorites: FavoritesProvider, public navParams: NavParams, public network: Network, public toastCtrl: ToastController, private alertCtrl: AlertController, private navCtrl: NavController) {
    this.initializeNetworkEvents();
    let status =  this.network.type !== 'none' ? ConnectionStatus.Online : ConnectionStatus.Offline;
    this.status.next(status);
  }

ionViewDidEnter() {

  this.onChange$ = this.onNetworkChange().subscribe((status: ConnectionStatus) => {
    console.log('STATUS: ', status);
    if (status === 0) {
      this.loadData();
    } else {
      this.showToast();
    }
  })
  // this.initializeNetworkEvents();


}

public initializeNetworkEvents() {

  this.offline$ = this.network.onDisconnect().subscribe(() => {
    if (this.status.getValue() === ConnectionStatus.Online) {
      console.log('WE ARE OFFLINE');
      this.updateNetworkStatus(ConnectionStatus.Offline);
    }
  });

  this.online$ = this.network.onConnect().subscribe(() => {
    if (this.status.getValue() === ConnectionStatus.Offline) {
      console.log('WE ARE ONLINE');
      this.updateNetworkStatus(ConnectionStatus.Online);
      // this.loadData();
    }
  });
}

private async updateNetworkStatus(status: ConnectionStatus) {

  this.status.next(status);

  let connection = status == ConnectionStatus.Offline ? 'Offline' : 'Online';
  let toast = this.toastCtrl.create({
    message: `You are now ${connection}`,
    duration: 3000,
    position: 'bottom'
  });

  toast.present();

  // toast.then(toast => toast.present());
}

public onNetworkChange(): Observable<ConnectionStatus> {
  return this.status.asObservable();
}

public getCurrentNetworkStatus(): ConnectionStatus {
  return this.status.getValue();
}


  loadData() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      spinner: 'dots'
    });

    loading.present();

    this.service.getMenuFood(this.dishDay).pipe(
      finalize(() => {
      })
    ).subscribe(items => {
      if (items.length > 0) {
        this.dishDayRef = items;
        loading.dismiss();
      } else {
        console.log('There is no items to show');
      }


    });
  }

  displayNetworkChanges(connectionState: string) {

    const connectionType = this.network.type;

    this.toastCtrl.create({
      message: `You are now ${connectionState} via ${connectionType}`,
      duration: 4000
    }).present();
  }

  async showToast() {
    await this.toastCtrl.create({
      message: 'Not network found',
      duration: 4000
    }).present();
  }


  openModal(dish: MenuFoods) {
    let modal = this.modalCtrl.create(
      'ModalPage',
      { content: dish }
    );
    modal.present();
  }

  async sendFavorites(items: MenuFoods) {
    await this.favorites.addFavorites(items);
  }

  ionViewWillLeave() {
      this.online$.unsubscribe();
      this.offline$.unsubscribe();
      this.onChange$.unsubscribe();
  }

}
