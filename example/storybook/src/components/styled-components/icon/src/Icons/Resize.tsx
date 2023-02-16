import { createIcon } from '@universa11y/icon';
import Root from '../styled-components/Root';

const ResizeIcon = createIcon({
  Root,
  viewBox: '0 0 16 16',
  d: 'M3 0C1.34315 0 0 1.34315 0 3V6.5C0 6.77614 0.223858 7 0.5 7C0.776142 7 1 6.77614 1 6.5V3C1 1.89543 1.89543 1 3 1H6.5C6.77614 1 7 0.776142 7 0.5C7 0.223858 6.77614 0 6.5 0H3ZM9.5 0C9.22386 0 9 0.223858 9 0.5C9 0.776142 9.22386 1 9.5 1H13C14.1046 1 15 1.89543 15 3V6.5C15 6.77614 15.2239 7 15.5 7C15.7761 7 16 6.77614 16 6.5V3C16 1.34315 14.6569 0 13 0H9.5ZM0.5 9C0.776142 9 1 9.22386 1 9.5V13C1 14.1046 1.89543 15 3 15H6.5C6.77614 15 7 15.2239 7 15.5C7 15.7761 6.77614 16 6.5 16H3C1.34315 16 0 14.6569 0 13V9.5C0 9.22386 0.223858 9 0.5 9ZM16 9.5C16 9.22386 15.7761 9 15.5 9C15.2239 9 15 9.22386 15 9.5V13C15 14.1046 14.1046 15 13 15H9.5C9.22386 15 9 15.2239 9 15.5C9 15.7761 9.22386 16 9.5 16H13C14.6569 16 16 14.6569 16 13V9.5Z',
});

ResizeIcon.displayName = 'ResizeIcon';

export { ResizeIcon };
