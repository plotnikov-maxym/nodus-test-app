import React from "react";
import renderer from "react-test-renderer";
import {extend} from "underscore";
import {Search} from "./Search";
import {createShallow} from "@material-ui/core/test-utils";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

describe("<Search />", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  describe("Search component", () => {
    it("matches snapshot", async () => {
      const wrapper = await renderComponent();
      expect(wrapper).toMatchSnapshot();
    });

    it("renders the correctly Input, changes value, and renders Delete button", async () => {
      const searchQuery = "Test Search Query";
      const wrapper = await getComponent();
      const input = wrapper.find(TextField);
      const inputAdornmentBefore = wrapper.find(TextField).prop("InputProps")
        .endAdornment;
      const fieldOnChange = input.prop("onChange");
      fieldOnChange({
        target: {name: "search", value: searchQuery},
      });
      wrapper.update();
      expect(wrapper.find(TextField).prop("value")).toBe(searchQuery);
      const inputAdornmentAfter = wrapper.find(TextField).prop("InputProps")
        .endAdornment;
      expect(inputAdornmentBefore).not.toBe(inputAdornmentAfter);
      const btn = shallow(inputAdornmentAfter);
      const icon = shallow(btn.props().children);
      icon.prop("onClick")();
      wrapper.update();
      expect(wrapper.find(TextField).prop("value")).toBe("");
    });

    it("renders submit button and handles form submission with fetchArticles", async () => {
      const fetchArticles = jest.fn();
      const searchQuery = "Test Search Query";
      const wrapper = await getComponent({fetchArticles});
      const input = wrapper.find(TextField);
      const fieldOnChange = input.prop("onChange");
      fieldOnChange({
        target: {name: "search", value: searchQuery},
      });
      const submitButton = wrapper
        .find(Button)
        .findWhere(btn => btn.prop("type") === "submit");
      expect(submitButton).toExist();
      const form = wrapper.find("form");
      form.prop("onSubmit")({
        preventDefault: () => {},
      });
      expect(wrapper.state("value")).toBe(searchQuery);
      await expect(fetchArticles).toHaveBeenCalledWith(searchQuery);
    });
    it("does not adding to favourites if value is less than on character", async () => {
      const addToFavourites = jest.fn();
      const searchQuery = "a";
      const wrapper = await getComponent({addToFavourites});
      const input = wrapper.find(TextField);
      const fieldOnChange = input.prop("onChange");
      fieldOnChange({
        target: {name: "search", value: searchQuery},
      });
      wrapper.update();
      const addButton = wrapper
        .find(Button)
        .findWhere(btn => btn.prop("type") === "button");
      addButton.simulate("click");
      await expect(addToFavourites).not.toHaveBeenCalled();
    });

    it("renders add to favourites button and handles adding to favourites function", async () => {
      const addToFavourites = jest.fn();
      const searchQuery = "Test Query";
      const expectedQuery = {id: "Test_Query", value: searchQuery};
      const wrapper = await getComponent({addToFavourites});
      const input = wrapper.find(TextField);
      const fieldOnChange = input.prop("onChange");
      fieldOnChange({
        target: {name: "search", value: searchQuery},
      });
      wrapper.update();
      const addButton = wrapper
        .find(Button)
        .findWhere(btn => btn.prop("type") === "button");
      expect(addButton).toExist();
      addButton.simulate("click");
      await expect(addToFavourites).toHaveBeenCalledWith(expectedQuery);
    });
  });

  const getComponent = props => {
    const parsedProps = extend(getMockProps(), props);

    return shallow(<Search {...parsedProps} />);
  };

  const renderComponent = props => {
    const parsedProps = extend(getMockProps(), props);

    return renderer.create(<Search {...parsedProps} />).toJSON();
  };

  const getMockProps = () => ({
    classes: {
      button: "Search-button-84",
      container: "Search-container-81",
      grow: "Search-grow-80",
      inputContainer: "Search-inputContainer-82",
      root: "Search-root-79",
      search: "Search-search-83",
    },
    fetchArticles: () => {},
    addToFavourites: () => {},
  });
});
