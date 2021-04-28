import { mocks } from "./mock";

export const restaurantsRequest = (location = "41.878113,-87.629799") => {
  console.log(mocks[location]);
};

restaurantsRequest();
