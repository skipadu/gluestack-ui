import { View } from 'react-native';
import { styled } from '@dank-style/react';

export default styled(
  View,
  {
    'justifyContent': 'center',
    'alignItems': 'center',
    'bg': 'transparent',
    'borderColor': '$borderLight400',
    'ml': '$2',
    'borderWidth': 2,
    'borderRadius': 999,

    '_web': {
      ':focusVisible': {
        outlineWidth: '2px',
        outlineColor: '$primary700',
        outlineStyle: 'solid',
        _dark: {
          outlineColor: '$primary400',
        },
      },
    },

    ':checked': {
      borderColor: '$primary600',
      bg: 'transparent',
    },

    ':hover': {
      'borderColor': '$borderLight500',
      'bg': 'transparent',

      ':checked': {
        bg: 'transparent',
        borderColor: '$primary700',
      },
    },

    ':active': {
      bg: '$primary800',
      borderColor: '$primary800',
    },

    '_dark': {
      'borderColor': '$borderDark500',
      'bg': '$transparent',

      ':hover': {
        'borderColor': '$borderDark400',
        'bg': 'transparent',

        ':checked': {
          bg: 'transparent',
          borderColor: '$primary400',
        },
      },

      ':checked': {
        borderColor: '$primary500',
      },

      ':active': {
        bg: '$primary300',
        borderColor: '$primary300',
      },
    },

    ':disabled': {
      opacity: 0.6,
    },

    ':invalid': {
      borderColor: '$error600',
    },
  },
  {
    ancestorStyle: ['_indicator'],
  }
);
