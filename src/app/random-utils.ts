export class RandomUtils {

  public static getRandom2States(cuttingValue: number) {
    return Math.random() >= cuttingValue;
  }

  public static getRandom3state(cuttingValue1: number, cuttingValue2: number): number {
    const randNumber = Math.random();
    if (randNumber <= cuttingValue1 && randNumber <= cuttingValue2) {
      console.log(1);
      return 1;

    } else if (randNumber >= cuttingValue1 && randNumber >= cuttingValue2) {
      console.log(2);
      return 2;
    } else {
      console.log(3);
      return 3;

    }
  }

  public static getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
