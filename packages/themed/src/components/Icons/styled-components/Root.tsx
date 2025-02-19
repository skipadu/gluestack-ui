import { AsForwarder } from '@gluestack-style/react';
import { styled } from '../../styled';

export const StyledIcon: any = styled(
  AsForwarder,
  {
    color: '$backgroundLight800',
    _dark: {
      color: '$backgroundDark400',
    },
    variants: {
      size: {
        '2xs': {
          h: '$3',
          w: '$3',
          props: {
            // @ts-ignore
            size: 12,
          },
        },
        'xs': {
          h: '$3.5',
          w: '$3.5',
          props: {
            //@ts-ignore
            size: 14,
          },
        },
        'sm': {
          h: '$4',
          w: '$4',
          props: {
            //@ts-ignore
            size: 16,
          },
        },
        'md': {
          h: '$4.5',
          w: '$4.5',
          props: {
            //@ts-ignore
            size: 18,
          },
        },
        'lg': {
          h: '$5',
          w: '$5',
          props: {
            //@ts-ignore
            size: 20,
          },
        },
        'xl': {
          h: '$6',
          w: '$6',
          props: {
            //@ts-ignore
            size: 24,
          },
        },
      },
    },
    // defaultProps: {
    //   size: 'md',
    // },
  },
  {
    ancestorStyle: ['_icon'],
    componentName: 'Icon',
  } as const,
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);

export default styled(
  StyledIcon,
  {
    props: {
      fill: 'none',
      size: 'md',
    },
    color: '$backgroundLight800',
    _dark: {
      //@ts-ignore
      color: '$backgroundDark400',
    },
  },
  {},
  {
    propertyTokenMap: {
      stroke: 'colors',
    },
  }
);
