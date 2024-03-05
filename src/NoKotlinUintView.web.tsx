import * as React from 'react';

import { NoKotlinUintViewProps } from './NoKotlinUint.types';

export default function NoKotlinUintView(props: NoKotlinUintViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
