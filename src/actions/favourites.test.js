import {addToFavourites, removeFromFavourites} from "../actions/favourites";
import {ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES} from "../actions/types";

describe("addToFavourites tests", () => {
  it("has type of ADD_TO_FAVOURITES", () => {
    expect(addToFavourites()).toEqual(
      expect.objectContaining({type: ADD_TO_FAVOURITES}),
    );
  });

  it("has article", () => {
    expect(addToFavourites("articleOne")).toEqual(
      expect.objectContaining({
        type: "ADD_TO_FAVOURITES",
        article: "articleOne",
      }),
    );
  });
});

describe("removeFromFavourites tests", () => {
  it("has type of REMOVE_FROM_FAVOURITES", () => {
    expect(removeFromFavourites()).toEqual(
      expect.objectContaining({type: REMOVE_FROM_FAVOURITES}),
    );
  });

  it("has article", () => {
    expect(removeFromFavourites(5)).toEqual(
      expect.objectContaining({
        type: "REMOVE_FROM_FAVOURITES",
        index: 5,
      }),
    );
  });
});
