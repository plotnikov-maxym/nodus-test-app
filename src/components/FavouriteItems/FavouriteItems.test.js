import React from "react";
import renderer from "react-test-renderer";
import {extend} from "underscore";
import {FavouriteItems} from "./FavouriteItems";
import {createShallow} from "@material-ui/core/test-utils";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import {locale} from "../../constants/locales";

describe("<FavouritesItems />", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  describe("FavouritesItems component", () => {
    it("matches snapshot if no FavouritesItems provided", async () => {
      const wrapper = await renderComponent({favourites: {}});
      expect(wrapper).toMatchSnapshot();
    });

    it("matches snapshot with FavouritesItems provided", async () => {
      const wrapper = await renderComponent();
      expect(wrapper).toMatchSnapshot();
    });

    it("renders the correct number of items", async () => {
      const wrapper = await getComponent();
      const props = getMockProps();
      const itemsQty = Object.keys(props.favourites).length;
      expect(wrapper.find(FormControl).children()).toHaveLength(itemsQty);
    });

    it("renders fallback if no favourites provided", async () => {
      const favourites = {};
      const wrapper = await getComponent({favourites});
      const itemsQty = Object.keys(favourites).length;
      expect(wrapper.find(FormControl).children()).toHaveLength(itemsQty);
      const fallbackText = wrapper
        .find(Typography)
        .findWhere(text => text.prop("variant") === "body1");
      expect(fallbackText.props().children).toEqual(locale.NO_FAVOURITES);
    });

    it("renders the correct heading", async () => {
      const heading = "Favourites";
      const wrapper = await getComponent({heading});
      expect(wrapper.find(Typography)).toExist();
      expect(wrapper.find(Typography).props().children).toEqual(heading);
    });

    it("renders the correctly Radio and handles onChange", async () => {
      const favourites = {
        key: "Search",
      };
      const wrapper = await getComponent({favourites});
      const radioBtn = wrapper.find(FormControlLabel);
      expect(radioBtn).toExist();
      expect(radioBtn.prop("control").props.value).toBe(favourites.key);
      expect(wrapper.state("value")).toEqual("");
      radioBtn.prop("control").props.onChange({
        target: {
          value: favourites.key,
        },
      });
      wrapper.update();
      expect(wrapper.state("value")).toEqual(favourites.key);
    });

    it("renders the correctly submit Button and calls proper function on submit", async () => {
      const fetchArticles = jest.fn();
      const favourites = {
        searchQuery: "Search Query",
      };
      const wrapper = await getComponent({favourites, fetchArticles});
      wrapper.setState({value: favourites.searchQuery});
      wrapper.update();
      const submitButton = wrapper
        .find(Button)
        .findWhere(btn => btn.prop("type") === "submit");
      expect(submitButton).toExist();
      const form = wrapper.find("form");
      form.prop("onSubmit")({
        preventDefault: () => {},
      });
      expect(fetchArticles).toHaveBeenCalledWith(favourites.searchQuery);
    });

    it("renders the correctly Delete Button and calls proper function on click and resets state value", async () => {
      const removeFromFavourites = jest.fn();
      const favourites = {
        searchQueryKey: "Search Query",
        searchQueryKey2: "Search Query 2",
      };
      const [deleteKey] = Object.keys(favourites);
      const wrapper = await getComponent({favourites, removeFromFavourites});
      wrapper.setState({value: favourites.searchQueryKey2});
      wrapper.update();
      const deleteBtns = wrapper.find(IconButton);
      expect(deleteBtns).toHaveLength(Object.keys(favourites).length);
      deleteBtns.forEach((btn, index) => {
        btn.simulate("click");
        wrapper.update();
        const favLength = Object.keys(favourites).length;
        // Line 33
        if (index !== favLength - 1) {
          expect(wrapper.state("value")).toEqual(favourites.searchQueryKey2);
        } else {
          expect(wrapper.state("value")).toEqual("");
        }
        expect(removeFromFavourites).toHaveBeenCalledWith(deleteKey);
      });
    });
  });

  const getComponent = props => {
    const parsedProps = extend(getMockProps(), props);

    return shallow(<FavouriteItems {...parsedProps} />);
  };

  const renderComponent = props => {
    const parsedProps = extend(getMockProps(), props);

    return renderer.create(<FavouriteItems {...parsedProps} />).toJSON();
  };

  const getMockProps = () => ({
    classes: {
      button: "FavouriteItems-button-192",
      deleteButton: "FavouriteItems-deleteButton-193",
      flexRow: "FavouriteItems-flexRow-189",
      formControl: "FavouriteItems-formControl-190",
      group: "FavouriteItems-group-191",
      root: "FavouriteItems-root-188",
    },
    removeFromFavourites: () => {},
    fetchArticles: () => {},
    heading: "My Test Heading",
    favourites: {
      MySearchQuery: "My Search Query",
      AnotherTestQueryTest: "Another Test Query - Tessss",
    },
  });
});
