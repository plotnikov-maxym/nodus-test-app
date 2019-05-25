import {ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES} from "../../actions/types";
import favouritesReducer from "../favourites";
const fakeState = {test: "fakeState"};

describe("ADD_TO_FAVOURITES reducer", () => {
  it("throw an error without an action", () => {
    expect(() => favouritesReducer(fakeState)).toThrow();
  });

  it("return the same state without a matching action.type", () => {
    const newState = favouritesReducer(fakeState, {type: "fakeAction"});
    expect(newState).toEqual(fakeState);
  });

  it("return the proper initialState when called without a state", () => {
    const newState = favouritesReducer(undefined, {type: "fakeAction"});
    expect(newState).toEqual({});
  });

  it("return the proper state for an ADD_TO_FAVOURITES action type", () => {
    const query = {id: 5123, value: "test"};
    const newState = favouritesReducer(undefined, {
      type: ADD_TO_FAVOURITES,
      query,
    });
    expect(newState).toEqual({5123: "test"});
  });

  it("doesn't change state if same object is provided for ADD_TO_FAVOURITES action type", () => {
    const query = {id: 5123, value: "test"};
    const mockState = {
      5123: "test",
      122: "test2",
    };
    const newState = favouritesReducer(mockState, {
      type: ADD_TO_FAVOURITES,
      query,
    });
    expect(newState).toEqual(mockState);
  });
});

describe("REMOVE_FROM_FAVOURITES reducer", () => {
  it("throw an error without an action", () => {
    expect(() => favouritesReducer(fakeState)).toThrow();
  });

  it("return the same state without a matching action.type", () => {
    const newState = favouritesReducer(fakeState, {type: "fakeAction"});
    expect(newState).toEqual(fakeState);
  });

  it("return the proper initialState when called without a state", () => {
    const newState = favouritesReducer(undefined, {type: "fakeAction"});
    expect(newState).toEqual({});
  });

  it("return the proper state for a ADD_TO_FAVOURITES action type", () => {
    const article = {value: "test"};
    const newState = favouritesReducer(undefined, {
      type: REMOVE_FROM_FAVOURITES,
      article,
    });
    expect(newState).toEqual({});
  });
});
