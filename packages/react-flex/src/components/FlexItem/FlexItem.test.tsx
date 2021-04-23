import * as React from 'react';
import { FlexItem } from './FlexItem';
import { render } from '@testing-library/react';
import { isConformant } from '../../common/isConformant';

describe('FlexItem', () => {
  isConformant({
    Component: FlexItem,
    displayName: 'FlexItem',
  });

  it('does not change node structure', () => {
    const { container } = render(<FlexItem>Item</FlexItem>);

    expect(container).toMatchSnapshot();
  });

  it('renders a default state', () => {
    const utils = render(<FlexItem>Item</FlexItem>);

    const item = utils.getByText('Item');
    expect(item).toHaveStyle({
      order: 0,
      alignSelf: 'auto',
      flexBasis: 'auto',
      flexGrow: 0,
      flexShrink: 1,
    });
  });

  it('sets alignment', () => {
    const utils = render(<FlexItem align="flex-start">Item</FlexItem>);

    const item = utils.getByText('Item');
    expect(item).toHaveStyle({
      alignSelf: 'flex-start',
    });
  });

  it('sets grow', () => {
    const utils = render(<FlexItem grow={1}>Item</FlexItem>);

    const item = utils.getByText('Item');
    expect(item).toHaveStyle({
      flexGrow: 1,
    });
  });

  it('sets shrink', () => {
    const utils = render(<FlexItem shrink={0}>Item</FlexItem>);

    const item = utils.getByText('Item');
    expect(item).toHaveStyle({
      flexShrink: 0,
    });
  });

  it('sets basis', () => {
    const utils = render(<FlexItem basis="10px">Item</FlexItem>);

    const item = utils.getByText('Item');
    expect(item).toHaveStyle({
      flexBasis: '10px',
    });
  });

  it('sets order', () => {
    const utils = render(<FlexItem order={2}>Item</FlexItem>);

    const item = utils.getByText('Item');
    expect(item).toHaveStyle({
      order: 2,
    });
  });
});
