import * as React from 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    tooltip?: any;
  }
}


