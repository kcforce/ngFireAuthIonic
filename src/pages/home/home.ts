import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// We import the authentication provider to test the log-out function.
import { AuthProvider } from '../../providers/auth/auth';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lat: number = undefined;
  long: number = undefined;

  constructor(public navCtrl: NavController, public authProvider: AuthProvider, private geolocation: Geolocation) {}

  /**
   * Calls the authentication provider and logs the user out, on successful logout it sends the user
   * back to the login page.
   */
  logMeOut() {
    this.authProvider.logoutUser().then( () => {
      this.navCtrl.setRoot('LoginPage');
    });
  }
  
  getLocation() {
	this.geolocation.getCurrentPosition().then((resp) => {
	 this.lat = resp.coords.latitude;
	 this.long = resp.coords.longitude;
	}).catch((error) => {
	console.log('Error getting location', error);
	});
  }

}
