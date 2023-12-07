import { PropsWithChildren } from 'react'

import GlobalStyles from '@/styles/global'

export function Providers({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
