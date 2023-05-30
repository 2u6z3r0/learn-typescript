// this is more like how interface works in Oops not related to types

interface TakePhoto {
  cameraMode: string;
  burst: number;
  filter: string;
}

interface Story {
  createStory(): void;
}

class instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public burst: number,
    public filter: string
  ) {}
}

class youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public burst: number,
    public filter: string
  ) {}
  createStory(): void {
    throw new Error("Method not implemented.");
  }
}

export {};
