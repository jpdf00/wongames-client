'use client'

// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'styled-components'

import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from '@/app/providers'
import theme from '@/styles/theme'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app'
// }

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={inter.className}>
          <StyledComponentsRegistry>
            <Providers>{children}</Providers>
          </StyledComponentsRegistry>
        </body>
      </html>
    </ThemeProvider>
  )
}
