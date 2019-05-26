import React from "react";
import renderer from "react-test-renderer";
import {extend} from "underscore";
import {Notification} from "./Notification";
import {createShallow} from "@material-ui/core/test-utils";
import Typography from "@material-ui/core/Typography";

describe("<Notification />", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  describe("Notification component", () => {
    it("matches snapshot", async () => {
      const wrapper = await renderComponent();
      expect(wrapper).toMatchSnapshot();
    });

    it("renders properly the correct color on error", async () => {
      const notification = {
        type: "error",
        message: "Test Message",
      };
      const wrapper = await getComponent({notification});
      expect(wrapper.find(Typography)).toExist();
      expect(wrapper.find(Typography).props().children).toEqual(
        notification.message,
      );
      const {classes} = getMockProps();
      expect(wrapper.find("div").prop("className")).toEqual(
        `${classes.notification} ${classes.error}`,
      );
    });

    it("does not renders if notification prop is absent", async () => {
      const notification = null;
      const wrapper = await getComponent({notification});
      expect(wrapper.find(Typography)).not.toExist();
    });
  });

  const getComponent = props => {
    const parsedProps = extend(getMockProps(), props);

    return shallow(<Notification {...parsedProps} />);
  };

  const renderComponent = props => {
    const parsedProps = extend(getMockProps(), props);

    return renderer.create(<Notification {...parsedProps} />).toJSON();
  };

  const getMockProps = () => ({
    classes: {
      notification: "notification-121",
      error: "error-122",
      info: "info-124",
      text: "text-123",
    },
    notification: {
      type: "info",
      message: "Test Message",
    },
  });
});
