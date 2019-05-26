import {sleep} from "./common";

jest.useFakeTimers();

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
