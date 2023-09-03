import { forwardRef } from 'react'

export const VisuallyHidden = forwardRef(
  (
    {
      className,
      showOnFocus,
      as: Component = 'span',
      children,
      visible,
      ...rest
    },
    ref
  ) => {
    return (
      <Component
        data-hidden={!visible && !showOnFocus}
        data-show-on-focus={showOnFocus}
        ref={ref}
        style={{ position: 'absolute' }}
        {...rest}
      >
        {children}
      </Component>
    )
  }
)
