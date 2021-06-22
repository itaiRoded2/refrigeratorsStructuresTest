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
    debugger;
    let whereIsTheMilk = sampleFridge.findMyFood("milk");

    alert("where Is The Milk for our sample fridge (see code): " + whereIsTheMilk);

  }

  createFridge() : Fridge {
    let fridge: Fridge = new Fridge(FridgeType.SideBySide, FridgeSizes._30By36,2,3 )

    return fridge;
  }

}
