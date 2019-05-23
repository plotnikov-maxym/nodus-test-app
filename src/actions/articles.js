import {pubmed} from "node-ncbi";
import {errorNotification} from "./notifications";
import {GET_ARTICLES} from "./types";

export const getArticles = branches => ({
  type: GET_ARTICLES,
  value: branches,
});

export const fetchArticles = (query, range = [0, 10]) => async dispatch => {
  let results;
  try {
    const {papers} = await pubmed.search(query, ...range);
    dispatch(getArticles(papers));
    results = papers;
  } catch (error) {
    dispatch(errorNotification(error));
  }

  return results;
};
