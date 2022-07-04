import * as React from 'react'

declare module 'react' {
  interface HTMLAttributes<T> extends React.DOMAttributes<T> {
    tooltip?: any
  }
}
