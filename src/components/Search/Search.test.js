import React from "react";
import renderer from "react-test-renderer";
import {extend} from "underscore";
import {Search} from "./Search";
import {createShallow} from "@material-ui/core/test-utils";
import {Formik, Field, Form} from "formik";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import {locale} from "../../constants/locales";

describe("<Search />", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow({dive: true});
  });

  describe("Search component", () => {
    it("matches snapshot", async () => {
      const wrapper = await renderComponent();
      expect(wrapper).toMatchSnapshot();
    });
    //
    // it("renders the correctly Radio and handles onChange", async () => {
    //   const favourites = {
    //     key: "Search",
    //   };
    //   const wrapper = await getComponent({favourites});
    //   const radioBtn = wrapper.find(FormControlLabel);
    //   expect(radioBtn).toExist();
    //   expect(radioBtn.prop("control").props.value).toBe(favourites.key);
    //   expect(wrapper.state("value")).toEqual("");
    //   radioBtn.prop("control").props.onChange({
    //     target: {
    //       value: favourites.key,
    //     },
    //   });
    //   wrapper.update();
    //   expect(wrapper.state("value")).toEqual(favourites.key);
    // });
    //
    // it("renders the correctly submit Button and calls proper function on submit", async () => {
    //   const fetchArticles = jest.fn();
    //   const favourites = {
    //     searchQuery: "Search Query",
    //   };
    //   const wrapper = await getComponent({favourites, fetchArticles});
    //   wrapper.setState({value: favourites.searchQuery});
    //   wrapper.update();
    //   const submitButton = wrapper
    //     .find(Button)
    //     .findWhere(btn => btn.prop("type") === "submit");
    //   expect(submitButton).toExist();
    //   const form = wrapper.find("form");
    //   form.prop("onSubmit")({
    //     preventDefault: () => {},
    //   });
    //   expect(fetchArticles).toHaveBeenCalledWith(favourites.searchQuery);
    // });

    it("renders the correctly clear Input Button and resets state value", async () => {
      const searchQuery = "Test Search Query";
      const wrapper = await getComponent();
      // wrapper.setState({value: searchQuery});
      // wrapper.update();
      const btn = wrapper.find(Field).prop("InputProps").endAdornment;
      expect(btn).toBe(false);
      // deleteBtn.simulate("click");
      // wrapper.update();
      // expect(wrapper.state("value")).toEqual("");
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
