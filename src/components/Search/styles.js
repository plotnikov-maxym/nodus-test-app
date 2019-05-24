import {fade} from "@material-ui/core/styles/colorManipulator";

export const styles = ({palette, spacing: {unit}}) => ({
  root: {
    padding: unit * 3,
  },
  grow: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  inputContainer: {
    minWidth: "50%",
    marginRight: unit * 2,
  },
  search: {
    backgroundColor: fade(palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(palette.common.white, 0.25),
    },
  },
  button: {
    marginLeft: unit * 2,
  },
});
