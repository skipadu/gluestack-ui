import type { ComponentMeta } from '@storybook/react-native';
import Link from './Link';

const LinkMeta: ComponentMeta<typeof Link> = {
  title: 'stories/FORMS/Link',
  component: Link,
  argTypes: {
    isHovered: {
      control: 'boolean',
      options: [true, false],
    },
    isPressed: {
      control: 'boolean',
      options: [true, false],
    },
    isFocusVisible: {
      control: 'boolean',
      options: [true, false],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    isHovered: false,
    isPressed: false,
    isFocusVisible: false,
    isDisabled: false,
  },
};

export { Link };
export default LinkMeta;
