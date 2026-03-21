'use client'

import type { FormHTMLAttributes, ReactNode } from 'react'

type Props = Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> & { children: ReactNode }

/** Intercepts submit until the form is wired to a server action or API. */
export default function PlaceholderForm({ children, ...rest }: Props) {
  return (
    <form {...rest} onSubmit={(e) => e.preventDefault()}>
      {children}
    </form>
  )
}
