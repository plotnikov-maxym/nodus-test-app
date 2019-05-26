import {SHOW_LOADER, HIDE_LOADER} from "../../actions/types";

const fakeState = {test: "fakeState"};

const loadingReducer = require("../loading").default;

describe("Loading reducer", () => {
  it("throw an error without an action", () => {
    expect(() => loadingReducer(fakeState)).toThrow();
  });

  it("return the same state without a matching action.type", () => {
    const newState = loadingReducer(fakeState, {type: "fakeAction"});
    expect(newState).toEqual(fakeState);
  });

  it("return the proper initialState when called without a state", () => {
    const newState = loadingReducer(undefined, {type: "fakeAction"});
    expect(newState).toEqual({
      show: false,
    });
  });

  it("return the proper state for a SHOW_LOADER action type", () => {
    const newState = loadingReducer(undefined, {
      type: SHOW_LOADER,
    });
    expect(newState).toEqual({
      show: true,
    });
  });

  it("return the proper state for a HIDE_LOADER action type", () => {
    const newState = loadingReducer(undefined, {
      type: HIDE_LOADER,
    });
    expect(newState).toEqual({
      show: false,
    });
  });
});
