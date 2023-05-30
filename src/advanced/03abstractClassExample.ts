abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public burst: number,
    public filter: string
  ) {}

  // either method should be abstract or should have the definition

  // getSepia() : void //this is not allowed
  abstract getSepia(): void;
  getReelTime(): number {
    // some complex logic 😝
    return 8;
  }
}

// let photo1 = new TakePhoto("test", 200, "test");
// above will not work as we can't instantiate a abstract class directly

class youtube extends TakePhoto {
  constructor(
    public cameraMode: string,
    public burst: number,
    public filter: string
  ) {
    super(cameraMode, burst, filter);
  }
  getSepia(): void {
    throw new Error("Method not implemented.");
  }
}

const yt1 = new youtube("test", 20, "test");
console.log(JSON.stringify(yt1));

export {};
