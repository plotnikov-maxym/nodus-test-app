import {fade} from '@material-ui/core/styles/colorManipulator';

export const styles = ({shape, palette, spacing, breakpoints, transitions}) => ({
  root: {
    width: '100%',
    padding: spacing.unit * 2,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  search: {
    position: 'relative',
    backgroundColor: fade(palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    minWidth: 300,
  },
  button: {
    marginLeft: spacing.unit * 2,
  },
});
