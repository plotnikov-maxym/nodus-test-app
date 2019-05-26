import React from "react";
import renderer from "react-test-renderer";
import {extend} from "underscore";
import {Preloader} from "./Preloader";
import {createShallow} from "@material-ui/core/test-utils";
import LinearProgress from "@material-ui/core/LinearProgress";

describe("<Preloader />", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  describe("Preloader component", () => {
    it("matches snapshot", async () => {
      const wrapper = await renderComponent();
      expect(wrapper).toMatchSnapshot();
    });

    it("renders the correct color", async () => {
      const color = "secondary";
      const wrapper = await getComponent({color});
      expect(wrapper.find(LinearProgress)).toExist();
      expect(wrapper.find(LinearProgress).prop("color")).toEqual(color);
    });

    it("does not renders if loading prop is false", async () => {
      const loading = false;
      const wrapper = await getComponent({loading});
      expect(wrapper.find(LinearProgress)).not.toExist();
    });
  });

  const getComponent = props => {
    const parsedProps = extend(getMockProps(), props);

    return shallow(<Preloader {...parsedProps} />);
  };

  const renderComponent = props => {
    const parsedProps = extend(getMockProps(), props);

    return renderer.create(<Preloader {...parsedProps} />).toJSON();
  };

  const getMockProps = () => ({
    classes: {
      root: "Preloader-root-122",
    },
    loading: true,
  });
});
