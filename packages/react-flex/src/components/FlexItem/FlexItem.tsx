import * as React from 'react';
import { useFlexItem } from './useFlexItem';
import { FlexItemProps } from './FlexItem.types';
import { renderFlexItem } from './renderFlexItem';
import { useFlexItemStyles } from './useFlexItemStyles';

/**
 * TODO: Component docs
 * {@docCategory FlexItem }
 */
export const FlexItem = React.forwardRef<HTMLElement, FlexItemProps>((props, ref) => {
  const state = useFlexItem(props, ref);

  useFlexItemStyles(state);
  return renderFlexItem(state);
});

FlexItem.displayName = 'FlexItem';
