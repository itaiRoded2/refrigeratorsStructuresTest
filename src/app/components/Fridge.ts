import { FridgeSizes, FridgeType } from "./config-options/ConfigOptions";

export class Fridge {

  layout: FridgeType;
  size: FridgeSizes;
  numberOfShelves: number;
  numberOfDrawers: number;

  constructor(layout: FridgeType = FridgeType.SideBySide, size: FridgeSizes = FridgeSizes._30By36, numberOfShelves: number = 1, numberOfDrawers: number = 1) {
    this.layout = layout;
    this.size = size;
    this.numberOfShelves = numberOfShelves;
    this.numberOfDrawers = numberOfDrawers;
  }

  findMyFood(foodItem: string) {

    let foodLocation: string;

    if (foodItem.toLowerCase() == "milk") {

      foodLocation = this.findMilkInOurAvailableConfigurations();

    } else if (foodItem.toLowerCase() == "gouda") {

      foodLocation = this.findGoudaInOurAvailableConfigurations();

    } else if (foodItem.toLowerCase() == "veggies") {

      foodLocation = this.findVeggiesInOurAvailableConfigurations();

    }

    return foodLocation;
  }

  findVeggiesInOurAvailableConfigurations(): string {

    let retVal: string;

    //check layout
    if (this.layout == FridgeType.SideBySide || this.layout == FridgeType.FrenchDoor) {

      retVal = "The door that hides the drawers, "

    } else if (this.layout == FridgeType.TopFreezer || this.layout == FridgeType.BottomFreezer) {

        retVal = "main door, "
    }

    //numberOfDrawers - the veggies are usually in the bottom
    if (this.numberOfDrawers > 0) {

      let bottomDrawer: number = 1; //as long as there are a drawers

      retVal = retVal +  "bottom drawer"

    }
    return retVal;

  }

  findGoudaInOurAvailableConfigurations() {

    let retVal: string;

    //check layout
    if (this.layout == FridgeType.SideBySide || this.layout == FridgeType.FrenchDoor) {

      retVal = "left door, "

    } else if (this.layout == FridgeType.TopFreezer || this.layout == FridgeType.BottomFreezer) {

        retVal = "main door, "
    }

    //checkNumberOfShelves - the cheese is usually in the middle
    if (this.numberOfShelves > 0) {

      let middleShelfWholeNum: number = parseInt(this.numberOfShelves.toString());

      retVal = retVal + middleShelfWholeNum +"nd shelf"

    }
    return retVal;

  }

  findMilkInOurAvailableConfigurations() {

    let retVal: string;

    //check layout
    if (this.layout == FridgeType.SideBySide || this.layout == FridgeType.FrenchDoor) {

      retVal = "right door, "

    } else if (this.layout == FridgeType.TopFreezer || this.layout == FridgeType.BottomFreezer) {

        retVal = "main door, "
    }

    //checkNumberOfShelves - the milk is usually in the middle
    if (this.numberOfShelves > 0) {

      let middleShelfWholeNum: number = parseInt(this.numberOfShelves.toString());

      retVal = retVal + middleShelfWholeNum +"nd shelf"

    }
    return retVal;

  }
}


