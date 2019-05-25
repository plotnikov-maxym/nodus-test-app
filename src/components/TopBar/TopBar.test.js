import React from "react";
import renderer from "react-test-renderer";
import {extend} from "underscore";
import {TopBar} from "./TopBar";
import {createShallow} from "@material-ui/core/test-utils";
import Typography from "@material-ui/core/Typography";

// Mocks

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
      root: "root",
      grow: "grow",
    },
    heading: "My Test Heading",
  });
});
