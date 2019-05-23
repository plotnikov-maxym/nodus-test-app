import articlesReducer from "../articles";
import {GET_ARTICLES} from "../../actions/types";

const fakeState = {test: "fakeState"};

describe("Articles Reducer", () => {
  it("throws an error without an action", () => {
    expect(() => articlesReducer(fakeState)).toThrow();
  });

  it("will return the same state without a matching action.type", () => {
    const newState = articlesReducer(fakeState, {type: "fakeAction"});
    expect(newState).toEqual(fakeState);
  });

  it("return the proper initialState when called without state", () => {
    const newState = articlesReducer(undefined, {type: "fakeAction"});
    expect(newState).toEqual({
      list: [],
    });
  });

  it("returns the expected state for GET_ARTICLES action", () => {
    const data = getArticlesList();
    const newState = articlesReducer(fakeState, {
      type: GET_ARTICLES,
      value: data,
    });
    expect(newState).toEqual({
      test: "fakeState",
      list: data,
    });
  });

  const getArticlesList = () => ["2313123", "adasddad"];
});
