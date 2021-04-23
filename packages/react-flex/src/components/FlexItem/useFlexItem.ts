import * as React from 'react';
import { makeMergeProps, useMergedRefs } from '@fluentui/react-utilities';
import { FlexItemProps, FlexItemState } from './FlexItem.types';

const mergeProps = makeMergeProps<FlexItemState>();

/**
 * Create the state required to render FlexItem.
 *
 * The returned state can be modified with hooks such as useFlexItemStyles,
 * before being passed to renderFlexItem.
 *
 * @param props - props from this instance of FlexItem
 * @param ref - reference to root HTMLElement of FlexItem
 * @param defaultProps - (optional) default prop values provided by the implementing type
 *
 * {@docCategory FlexItem }
 */
export const useFlexItem = (
  props: FlexItemProps,
  ref: React.Ref<HTMLElement>,
  defaultProps?: FlexItemProps,
): FlexItemState => {
  const state = mergeProps(
    {
      ref: useMergedRefs(ref, React.useRef(null)),
    },
    defaultProps,
    props,
  );

  return state;
};
