import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { FlexItemState } from './FlexItem.types';

/**
 * Render the final JSX of FlexItem
 * {@docCategory FlexItem }
 */
export const renderFlexItem = (state: FlexItemState) => {
  const { slots, slotProps } = getSlots(state);

  return <slots.root {...slotProps.root}>{state.children}</slots.root>;
};
