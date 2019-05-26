export const styles = ({spacing: {unit}}) => ({
  notification: {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 100,
    backgroundColor: "transparent",
    opacity: 0.9,
    minHeight: unit * 4,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `0 ${unit * 2}px`,
  },
  error: {
    backgroundColor: "#f44336",
  },
  info: {backgroundColor: "#4caf50"},
  text: {
    padding: 0,
    color: "white",
    flexGrow: 3,
    margin: 0,
  },
});
