import * as React from 'react';
import { ComponentProps, ComponentState } from '@fluentui/react-utilities';
import { GlobalsNumber, AlignSelfProperty, FlexBasisProperty } from 'csstype';

/**
 * FlexItem component properties
 * {@docCategory FlexItem }
 */
export interface FlexItemProps extends ComponentProps, React.HTMLAttributes<HTMLElement> {
  /**
   * Self alignment in flex layout.
   * Wrapper of the CSS `align-self`.
   */
  align?: AlignSelfProperty;

  /**
   * Grow factor.
   * Wrapper of the CSS `flex-grow`.
   */
  grow?: GlobalsNumber;

  /**
   * Shrink factor.
   * Wrapper of the CSS `flex-shrink`.
   */
  shrink?: GlobalsNumber;

  /**
   * Initial main size of a the item.
   * Wrapper of the CSS `flex-basis`.
   */
  basis?: FlexBasisProperty<string | number>;

  /**
   * Order to lay out itself in the flex container.
   * Wrapper of the CSS `order`.
   */
  order?: GlobalsNumber;
}

/**
 * FlexItem component state
 * {@docCategory FlexItem }
 */
export type FlexItemState = ComponentState<React.Ref<HTMLElement>, FlexItemProps>;
