import {sleep} from "./common";

jest.useFakeTimers();
jest.unmock("react-redux");
const redux = require("react-redux");
redux.connect = jest.fn().mockReturnValue(jest.fn());

// Messy, but the only way I could see to mock destructured es6 imports
// from node modules

describe("Test common helper functions", () => {
  it("test sleep method", () => {
    expect.assertions(1);
    const pendingPromise = sleep(1000).then(resolved => {
      expect(resolved).toBeUndefined();
    });
    jest.runAllTimers();

    return pendingPromise;
  });
});
