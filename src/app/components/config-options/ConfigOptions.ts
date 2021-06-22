class Fridge {
  Layout: FridgeType;
  Size: FridgeSizes;
  numberOfShelves: number;
  numberOfDrawers: number;
}

export enum FridgeType {
  BottomFreezer = "BottomFreezer",
  TopFreezer = "TopFreezer",
  FrenchDoor = "FrenchDoor",
  SideBySide = "SideBySide"
}


export enum FridgeSizes {
  _30By36 = "_30By36",
  _23By36 = "_23By36"

}

