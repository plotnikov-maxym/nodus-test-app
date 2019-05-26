import {pubmed} from "node-ncbi";
import {errorNotification} from "./notifications";
import {GET_ARTICLES} from "./types";
import {hideLoader, showLoader} from "./loading";

export const getArticles = branches => ({
  type: GET_ARTICLES,
  value: branches,
});

export const fetchArticles = (query, range = [0, 10]) => async dispatch => {
  dispatch(showLoader());
  let results;
  try {
    const {papers} = await pubmed.search(query, ...range);
    dispatch(getArticles(papers));
    dispatch(hideLoader());
    results = papers;
  } catch (error) {
    dispatch(errorNotification(error));
    dispatch(hideLoader());
  }

  return results;
};
