import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the LoggedinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loggedin',
  templateUrl: 'loggedin.html',
})
export class LoggedinPage {

  email: string;
  options: BarcodeScannerOptions;
  encodText: string = '';
  encodedData: any = {};
  scannedData: any = {};

  constructor(private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, public scanner: BarcodeScanner) {
    this.email = fire.auth.currentUser.email;
  }

  scan() {
    this.options = {
      prompt: 'Scan Your Barcode'
    };
    this.scanner.scan(this.options).then((data) => {
      this.scannedData = data;
    }, (error) => {
      console.log('Error:', error);
    })
  }

  encode() {
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodText).then((data) => {
      this.encodedData = data;
    }, (error) => {
      console.log('Error:', error);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedinPage');
  }

}
