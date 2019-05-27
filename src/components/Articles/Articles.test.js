import React from "react";
import renderer from "react-test-renderer";
import {extend} from "underscore";
import {createShallow} from "@material-ui/core/test-utils";
import {Articles} from "./Articles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {locale} from "../../constants/locales";

describe("<Articles />", () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  describe("Articles component", () => {
    it("matches snapshot if no Articles provided", async () => {
      const wrapper = await renderComponent({articles: []});
      expect(wrapper).toMatchSnapshot();
    });

    it("matches snapshot with Articles provided", async () => {
      const wrapper = await renderComponent();
      expect(wrapper).toMatchSnapshot();
    });

    it("renders the correct number of items", async () => {
      const wrapper = await getComponent();
      const props = getMockProps();
      const itemsQty = props.articles.length;
      expect(wrapper.find(Paper).children()).toHaveLength(itemsQty);
    });

    it("renders fallback if no favourites provided", async () => {
      const articles = [];
      const wrapper = await getComponent({articles});
      const itemsQty = articles.length;
      expect(wrapper.find(Paper).children()).toHaveLength(itemsQty);
      const fallbackText = wrapper
        .find(Typography)
        .findWhere(text => text.prop("variant") === "button");
      expect(fallbackText.props().children).toEqual(locale.NO_MATCHES);
    });
  });

  it("renders Details button and calls fetchAbstract function", async () => {
    const fetchAbstract = jest.fn();
    const wrapper = await getComponent({fetchAbstract});
    const {articles} = getMockProps();
    const addButton = wrapper
      .find(Button)
      .findWhere(btn => btn.prop("variant") === "text");
    expect(addButton).toExist();
    addButton.simulate("click");
    await expect(fetchAbstract).toHaveBeenCalledWith(articles[0].pmid, 0);
  });

  const getComponent = props => {
    const parsedProps = extend(getMockProps(), props);

    return shallow(<Articles {...parsedProps} />);
  };

  const renderComponent = props => {
    const parsedProps = extend(getMockProps(), props);

    return renderer.create(<Articles {...parsedProps} />).toJSON();
  };

  const getMockProps = () => ({
    classes: {
      card: "Articles-card-198",
      date: "Articles-date-200",
      flexColumn: "Articles-flexColumn-197",
      flexRow: "Articles-flexRow-196",
      group: "Articles-group-199",
      root: "Articles-root-195",
    },
    articles: [
      {
        authors:
          "Blevins Peratikos M, Weeks HL, Pisansky AJB, Yong RJ, Stringer EA",
        doi: "10.1093/pm/pnz083",
        pmid: 31120529,
        pubDate: "2019/05/23 00:00",
        raw: {
          uid: "31120529",
          pubdate: "2019 May 23",
          epubdate: "2019 May 23",
          source: "Pain Med",
          authors: [],
        },
        title:
          "Effect of Preoperative Opioid Use on Adversplasty in the United States",
      },
    ],
    fetchAbstract: () => {},
  });
});
