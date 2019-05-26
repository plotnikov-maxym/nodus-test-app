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
    alignItems: "center",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: unit * 2,
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
});
