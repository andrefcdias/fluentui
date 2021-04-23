import { mergeClasses, makeStyles } from '@fluentui/react-make-styles';
import { FlexItemState } from './FlexItem.types';

const useStyles = makeStyles({
  root: {},
});

/**
 * Apply styling to the FlexItem slots based on the state
 * {@docCategory FlexItem }
 */
export const useFlexItemStyles = (state: FlexItemState): FlexItemState => {
  const styles = useStyles();
  state.className = mergeClasses(styles.root, state.className);

  state.style = {
    ...state.style,
    alignSelf: state.align ?? 'auto',
    flexGrow: state.grow ?? 0,
    flexShrink: state.shrink ?? 1,
    flexBasis: state.basis ?? 'auto',
    order: state.order ?? 0,
  };

  return state;
};
