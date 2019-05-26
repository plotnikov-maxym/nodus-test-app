import {SHOW_LOADER, HIDE_LOADER} from "./types";
import {showLoader, hideLoader} from "./loading";

describe("action progress", () => {
  it("update progress", () => {
    const expectedAction = {
      type: SHOW_LOADER,
    };
    expect(showLoader()).toEqual(expectedAction);
  });

  it("clear progress", () => {
    const expectedAction = {
      type: HIDE_LOADER,
    };
    expect(hideLoader()).toEqual(expectedAction);
  });
});
