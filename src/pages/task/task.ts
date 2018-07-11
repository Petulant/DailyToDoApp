import { MYTODOS } from './../../TaskArray.ts/List.MyTask';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { variable, THIS_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the TaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task',
  templateUrl: 'task.html',
})
export class TaskPage {
  MYTODOS(arg0: any, arg1: any): any {
    throw new Error("Method not implemented.");
  }

  List= MYTODOS;
  tasks;
  todos;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }
  move2(){
  this.List.push({Task:this.tasks});

  }
  moveDisplay(){
    this.navCtrl.push('DisplayPage',{variable:this.tasks});

  }

}
