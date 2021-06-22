import { Component, OnInit } from '@angular/core';
import { Fridge } from './../Fridge';
import { FridgeSizes, FridgeType } from './ConfigOptions';

@Component({
  selector: 'config-options',
  templateUrl: './config-options.component.html',
  styleUrls: ['./config-options.component.scss']
})
export class ConfigOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let sampleFridge = this.createFridge()
    let whereIsTheMilk = sampleFridge.findMyFood("milk");
    let whereIsTheGouda = sampleFridge.findMyFood("Gouda");
    let whereAreTheVeggies = sampleFridge.findMyFood("veggies");


    // alert("where Is The Milk for our sample fridge (see code): " + whereIsTheMilk);
    // alert("where Is The Gouda for our sample fridge (see code): " + whereIsTheGouda);
    // alert("where are The veggies for our sample fridge (see code): " + whereAreTheVeggies);

    let sampleFridge2 = this.createFridge2()
    let whereIsTheMilk2 = sampleFridge2.findMyFood("milk");
    let whereIsTheGouda2 = sampleFridge2.findMyFood("Gouda");
    let whereAreTheVeggies2 = sampleFridge2.findMyFood("veggies");


    //alert("where Is The Milk for our sample fridge (see code): " + whereIsTheMilk2);
    //alert("where Is The Gouda for our sample fridge (see code): " + whereIsTheGouda2);
     alert("where are The veggies for our sample fridge (see code): " + whereAreTheVeggies2);

  }

  createFridge() : Fridge {
    let fridge: Fridge = new Fridge(FridgeType.SideBySide, FridgeSizes._30By36,2,3 )
    return fridge;
  }

  createFridge2() : Fridge {
    let fridge: Fridge = new Fridge(FridgeType.TopFreezer, FridgeSizes._30By36,2,3 )
    return fridge;
  }
}
