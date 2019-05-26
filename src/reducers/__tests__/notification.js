import {
  INFO_NOTIFICATION,
  ERROR_NOTIFICATION,
  CLEAR_NOTIFICATION,
} from "../../actions/types";

const initialState = {type: null, message: ""};
const fakeState = {test: "fakeState"};

const notificationReducer = require("../notifications").default;

describe("Notification reducer", () => {
  it("throw an error without an action", () => {
    expect(() => notificationReducer(fakeState)).toThrow();
  });

  it("return the same state without a matching action.type", () => {
    const newState = notificationReducer(fakeState, {type: "fakeAction"});
    expect(newState).toEqual(fakeState);
  });

  it("return the proper initialState when called without a state", () => {
    const newState = notificationReducer(undefined, {type: "fakeAction"});
    expect(newState).toEqual(initialState);
  });

  describe("INFO_NOTIFICATION reducer", () => {
    it("return the proper state for an INFO_NOTIFICATION action type", () => {
      const message = "Info message";
      const newState = notificationReducer(undefined, {
        type: INFO_NOTIFICATION,
        message,
      });
      expect(newState).toEqual({type: "info", message});
    });
  });

  describe("ERROR_NOTIFICATION reducer", () => {
    it("return the proper state for an ERROR_NOTIFICATION action type", () => {
      const message = "Info message";
      const newState = notificationReducer(undefined, {
        type: ERROR_NOTIFICATION,
        message,
      });
      expect(newState).toEqual({type: "error", message});
    });
  });

  describe("CLEAR_NOTIFICATION reducer", () => {
    it("return the proper state for an CLEAR_NOTIFICATION action type", () => {
      const newState = notificationReducer(undefined, {
        type: CLEAR_NOTIFICATION,
      });
      expect(newState).toEqual(initialState);
    });
  });
});
