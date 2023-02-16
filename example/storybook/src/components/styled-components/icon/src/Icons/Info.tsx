import React from 'react';
import { createIcon } from '@universa11y/icon';
import Root from '../styled-components/Root';
import { Path, G } from 'react-native-svg';

export const InfoOutlineIcon = createIcon({
  Root,
  viewBox: '0 0 24 24',
  path: (
    <G>
      <Path d="M11.9442 8.24C12.5628 8.24 13.0642 7.73856 13.0642 7.12C13.0642 6.50144 12.5628 6 11.9442 6C11.3257 6 10.8242 6.50144 10.8242 7.12C10.8242 7.73856 11.3257 8.24 11.9442 8.24Z" />
      <Path d="M14.4008 15.9996H12.8008V9.59961H10.4008C10.1886 9.59961 9.98513 9.68389 9.8351 9.83392C9.68507 9.98395 9.60078 10.1874 9.60078 10.3996C9.60078 10.6118 9.68507 10.8153 9.8351 10.9653C9.98513 11.1153 10.1886 11.1996 10.4008 11.1996H11.2008V15.9996H9.60078C9.38861 15.9996 9.18513 16.0839 9.0351 16.2339C8.88507 16.384 8.80078 16.5874 8.80078 16.7996C8.80078 17.0118 8.88507 17.2153 9.0351 17.3653C9.18513 17.5153 9.38861 17.5996 9.60078 17.5996H14.4008C14.613 17.5996 14.8164 17.5153 14.9665 17.3653C15.1165 17.2153 15.2008 17.0118 15.2008 16.7996C15.2008 16.5874 15.1165 16.384 14.9665 16.2339C14.8164 16.0839 14.613 15.9996 14.4008 15.9996Z" />
      <Path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17316C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8078C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 9.34783 20.9464 6.80429 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2ZM12 20.3333C10.3518 20.3333 8.74066 19.8446 7.37025 18.9289C5.99984 18.0132 4.93174 16.7117 4.30101 15.189C3.67028 13.6663 3.50525 11.9908 3.82679 10.3742C4.14834 8.75774 4.94201 7.27288 6.10745 6.10744C7.27288 4.942 8.75774 4.14833 10.3743 3.82679C11.9908 3.50525 13.6663 3.67027 15.189 4.301C16.7117 4.93173 18.0132 5.99984 18.9289 7.37025C19.8446 8.74066 20.3333 10.3518 20.3333 12C20.3333 13.0943 20.1178 14.178 19.699 15.189C19.2802 16.2001 18.6664 17.1187 17.8926 17.8926C17.1187 18.6664 16.2001 19.2802 15.189 19.699C14.178 20.1178 13.0944 20.3333 12 20.3333Z" />
    </G>
  ),
});

InfoOutlineIcon.displayName = 'InfoOutlineIcon';
export const InfoIcon = createIcon({
  Root,
  viewBox: '0 0 24 24',
  d: 'M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519948 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0ZM12.25 5C12.5467 5 12.8367 5.08797 13.0834 5.25279C13.33 5.41762 13.5223 5.65189 13.6358 5.92597C13.7494 6.20006 13.7791 6.50166 13.7212 6.79263C13.6633 7.08361 13.5204 7.35088 13.3107 7.56066C13.1009 7.77044 12.8336 7.9133 12.5426 7.97118C12.2517 8.02905 11.9501 7.99935 11.676 7.88582C11.4019 7.77229 11.1676 7.58003 11.0028 7.33335C10.838 7.08668 10.75 6.79667 10.75 6.5C10.75 6.10217 10.908 5.72064 11.1893 5.43934C11.4706 5.15803 11.8522 5 12.25 5ZM14.5 18.5H10.5C10.2348 18.5 9.98043 18.3946 9.7929 18.2071C9.60536 18.0196 9.5 17.7652 9.5 17.5C9.5 17.2348 9.60536 16.9804 9.7929 16.7929C9.98043 16.6054 10.2348 16.5 10.5 16.5H11.25C11.3163 16.5 11.3799 16.4737 11.4268 16.4268C11.4737 16.3799 11.5 16.3163 11.5 16.25V11.75C11.5 11.6837 11.4737 11.6201 11.4268 11.5732C11.3799 11.5263 11.3163 11.5 11.25 11.5H10.5C10.2348 11.5 9.98043 11.3946 9.7929 11.2071C9.60536 11.0196 9.5 10.7652 9.5 10.5C9.5 10.2348 9.60536 9.98043 9.7929 9.79289C9.98043 9.60536 10.2348 9.5 10.5 9.5H11.5C12.0304 9.5 12.5391 9.71071 12.9142 10.0858C13.2893 10.4609 13.5 10.9696 13.5 11.5V16.25C13.5 16.3163 13.5263 16.3799 13.5732 16.4268C13.6201 16.4737 13.6837 16.5 13.75 16.5H14.5C14.7652 16.5 15.0196 16.6054 15.2071 16.7929C15.3946 16.9804 15.5 17.2348 15.5 17.5C15.5 17.7652 15.3946 18.0196 15.2071 18.2071C15.0196 18.3946 14.7652 18.5 14.5 18.5Z',
});

InfoIcon.displayName = 'InfoIcon';
