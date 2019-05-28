import {pubmed} from "node-ncbi";
import {errorNotification} from "./notifications";
import {GET_ARTICLES, ADD_ABSTRACT} from "./types";
import {hideLoader, showLoader} from "./loading";

export const getArticles = branches => ({
  type: GET_ARTICLES,
  value: branches,
});

export const addAbstract = abstract => ({
  type: ADD_ABSTRACT,
  value: abstract,
});

export const fetchArticles = (query, range = [0, 10]) => async dispatch => {
  dispatch(showLoader());
  localStorage.setItem("isFetched", true);
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

export const fetchAbstract = (pmid, index) => async dispatch => {
  dispatch(showLoader());
  try {
    const abstract = await pubmed.abstract(pmid);
    dispatch(addAbstract({abstract, index}));
    dispatch(hideLoader());
  } catch (error) {
    dispatch(errorNotification(error));
    dispatch(hideLoader());
  }
};
