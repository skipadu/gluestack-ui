import { styled } from '../../styled';
import { StyledIcon } from '../../Icons/styled-components';

export default styled(
  StyledIcon,
  {
    props: {
      size: 'md',
    },
  },
  {
    componentName: 'SelectIcon',
    ancestorStyle: ['_icon'],
  } as const,
  {}
);
