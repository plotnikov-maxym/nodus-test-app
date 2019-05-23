export const styles = ({spacing: {unit}}) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  formControl: {
    margin: unit * 3,
  },
  group: {
    margin: `${unit}px 0`,
  },
  button: {
    margin: `${unit * 2}px 0 0`,
  },
  deleteButton: {
    marginLeft: unit * 2,
  },
});
