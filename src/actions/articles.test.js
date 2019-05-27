import {
  getArticles,
  addAbstract,
  fetchArticles,
  fetchAbstract,
} from "../actions/articles";
import {GET_ARTICLES, ADD_ABSTRACT} from "./types";
import {pubmed} from "node-ncbi";
import {errorNotification} from "./notifications";
import {showLoader, hideLoader} from "./loading";

jest.mock("node-ncbi");
jest.mock("../actions/notifications");
jest.mock("../actions/loading");

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

  describe("addAbstract tests", () => {
    it("has type of ADD_ABSTRACT", () => {
      expect(addAbstract()).toEqual(
        expect.objectContaining({type: ADD_ABSTRACT}),
      );
    });

    it("has abstract data", () => {
      const values = {abstract: "eweqweq", index: 1};
      expect(addAbstract(values)).toEqual(
        expect.objectContaining({
          type: "ADD_ABSTRACT",
          value: values,
        }),
      );
    });
  });

  describe("fetchArticles tests", () => {
    beforeEach(() => {
      pubmed.search.mockClear();
      errorNotification.mockClear();
      showLoader.mockClear();
      hideLoader.mockClear();
    });

    it("calls fetch articles function", async () => {
      invokeFetchArticles(null);
      await expect(pubmed.search).toHaveBeenCalled();
    });

    it("passes query to fetch articles function", async () => {
      const query = "testQuery";
      const range = [0, 10];
      invokeFetchArticles(query);
      expect.assertions(3);
      await expect(showLoader).toHaveBeenCalled();
      await expect(pubmed.search).toHaveBeenCalledWith(query, ...range);
      await expect(hideLoader).toHaveBeenCalled();
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

  describe("fetchAbstract tests", () => {
    beforeEach(() => {
      pubmed.abstract.mockClear();
      errorNotification.mockClear();
      showLoader.mockClear();
      hideLoader.mockClear();
    });

    it("calls fetch abstract function", () => {
      invokeFetchAbstract(null);
      expect(pubmed.abstract).toHaveBeenCalled();
    });

    it("passes query to fetch abstract function", async () => {
      const pmid = 1233123;
      invokeFetchAbstract(pmid);
      expect.assertions(3);
      await expect(showLoader).toHaveBeenCalled();
      await expect(pubmed.abstract).toHaveBeenCalledWith(pmid);
      await expect(hideLoader).toHaveBeenCalled();
    });

    it("dispatches error notification on service failure", async () => {
      const error = new Error("Unable to contact API service");
      const err = {type: "FAKE_ERROR", message: error};
      pubmed.abstract.mockImplementation(() => {
        return Promise.reject(error);
      });
      errorNotification.mockImplementation(() => {
        return err;
      });
      let dispatchFake;
      try {
        dispatchFake = await invokeFetchAbstract(null);
      } catch (thrownError) {
        expect(hideLoader).toHaveBeenCalled();
        expect(errorNotification).toHaveBeenCalled();
        expect(dispatchFake).toHaveBeenCalledWith(err);
        expect(thrownError).toBe(err);
      }
    });

    const invokeFetchAbstract = async pmid => {
      const dispatchFake = jest.fn();
      await fetchAbstract(pmid)(dispatchFake);

      return dispatchFake;
    };
  });
});
