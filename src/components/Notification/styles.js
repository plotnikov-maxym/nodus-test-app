export const styles = ({spacing: {unit}}) => ({
  notification: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    zIndex: 100,
    backgroundColor: "transparent",
    opacity: 0.9,
    minHeight: unit * 4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `0 ${unit}px`,
  },
  error: {
    backgroundColor: "#f44336",
  },
  info: {backgroundColor: "#4caf50"},
  text: {
    padding: 0,
    color: "white",
    margin: 0,
  },
});
