import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    p: '$4',
    borderColor: '$borderLight300',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    _dark: {
      borderColor: '$borderDark700',
    },
  },
  {
    componentName: 'AlertDialogHeader',
  } as const
);
