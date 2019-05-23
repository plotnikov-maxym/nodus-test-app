import {getArticles, fetchArticles} from "../actions/articles";
import {GET_ARTICLES} from "./types";
import {pubmed} from "node-ncbi";
import {errorNotification} from "./notifications";

jest.mock("node-ncbi");
jest.mock("../actions/notifications");

describe("Articles actions tests", () => {
  describe("getArticles tests", () => {
    it("has type of GET_ARTICLES", () => {
      expect(getArticles()).toEqual(
        expect.objectContaining({type: GET_ARTICLES}),
      );
    });

    it("has articles data", () => {
      const values = {id: "11", name: "test"};
      expect(getArticles(values)).toEqual(
        expect.objectContaining({
          type: "GET_ARTICLES",
          value: values,
        }),
      );
    });
  });

  describe("fetchArticles tests", () => {
    beforeEach(() => {
      pubmed.search.mockClear();
      errorNotification.mockClear();
    });

    it("calls fetch agency branches function", () => {
      invokeFetchArticles(null);
      expect(pubmed.search).toHaveBeenCalled();
    });

    it("passes query to fetch agency branches function", () => {
      const query = "testQuery";
      invokeFetchArticles(query);
      expect(pubmed.search).toHaveBeenCalledWith(query);
    });

    it("dispatches error notification on service failure", async () => {
      const error = new Error("Unable to contact API service");
      const err = {type: "FAKE_ERROR", message: error};
      pubmed.search.mockImplementation(() => {
        return Promise.reject(error);
      });
      errorNotification.mockImplementation(() => {
        return err;
      });
      let dispatchFake;
      try {
        dispatchFake = await invokeFetchArticles(null);
      } catch (thrownError) {
        expect(errorNotification).toHaveBeenCalled();
        expect(dispatchFake).toHaveBeenCalledWith(err);
        expect(thrownError).toBe(err);
      }
    });

    const invokeFetchArticles = async query => {
      const dispatchFake = jest.fn();
      await fetchArticles(query)(dispatchFake);

      return dispatchFake;
    };
  });
});
