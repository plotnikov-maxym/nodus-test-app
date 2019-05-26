import React from "react";
import renderer from "react-test-renderer";
import {extend} from "underscore";
import {TopBar} from "./TopBar";
import {createShallow} from "@material-ui/core/test-utils";
import Typography from "@material-ui/core/Typography";
import Preloader from "../Preloader";

describe("<TopBar />", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  describe("TopBar component", () => {
    it("matches snapshot", async () => {
      const wrapper = await renderComponent();
      expect(wrapper).toMatchSnapshot();
    });

    it("renders the correct heading", async () => {
      const heading = "Howdy mates!";
      const wrapper = await getComponent({heading});
      expect(wrapper.find(Typography)).toExist();
      expect(wrapper.find(Typography).props().children).toEqual(heading);
    });

    it("renders the Preloader is isLoading passed", async () => {
      const isLoading = true;
      const wrapper = await getComponent({isLoading});
      expect(wrapper.find(Preloader)).toExist();
    });
  });

  const getComponent = props => {
    const parsedProps = extend(getMockProps(), props);

    return shallow(<TopBar {...parsedProps} />);
  };

  const renderComponent = props => {
    const parsedProps = extend(getMockProps(), props);

    return renderer.create(<TopBar {...parsedProps} />).toJSON();
  };

  const getMockProps = () => ({
    classes: {
      root: "Topbar-root-122",
      grow: "Topbar-grow-121",
    },
    heading: "My Test Heading",
    isLoading: false,
  });
});
