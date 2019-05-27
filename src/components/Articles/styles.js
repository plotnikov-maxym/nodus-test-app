export const styles = ({spacing: {unit}, palette}) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: unit * 3,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyItems: "flex-start",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: unit * 2,
    flexBasis: "90%",
  },
  card: {
    marginBottom: unit,
  },
  group: {
    margin: `${unit}px 0`,
    width: "100%",
  },
  date: {
    color: palette.grey.A200,
  },
  detailsBtn: {
    flexBasis: "10%",
    margin: unit * 2,
  },
});
