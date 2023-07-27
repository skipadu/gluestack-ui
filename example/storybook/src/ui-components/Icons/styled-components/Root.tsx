import { AsForwarder } from '@gluestack-style/react';
import { styled } from '../../styled';

export default styled(
  AsForwarder,
  {
    props: {
      fill: 'none',
    },
    color: '$backgroundLight800',
    _dark: {
      color: '$backgroundDark400',
    },
    variants: {
      size: {
        '2xs': {
          h: 12,
          w: 12,
        },
        'xs': {
          h: 14,
          w: 14,
        },
        'sm': {
          h: 16,
          w: 16,
        },
        'md': {
          h: 18,
          w: 18,
        },
        'lg': {
          h: 20,
          w: 20,
        },
        'xl': {
          h: 24,
          w: 24,
        },
      },
    },
    defaultProps: {
      size: 'md',
    },
  },
  {},
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);
