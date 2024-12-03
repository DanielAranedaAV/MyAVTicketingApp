// @types/av__av-ui-library.d.ts
declare module '@av/av-ui-library/stories/Button/Button' {
  import { ComponentType } from 'react';

  interface AVButtonProps {
    mode: string;
    text: string;
    color: string;
    style?: object;
    args?: any[];
    compact?: boolean;
    disabled?: boolean;
    icon?: any;
  }

  const AVButton: ComponentType<AVButtonProps>;
  export { AVButton };
}