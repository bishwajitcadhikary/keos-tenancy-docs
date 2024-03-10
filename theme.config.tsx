import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>WovoSaas</span>,
  project: {
    link: 'https://github.com/bishwajitcadhikary/wovosaas/tree/main',
  },
  docsRepositoryBase: 'https://github.com/bishwajitcadhikary/keos-tenancy-docs/tree/main',
  footer: {
    text: new Date().getFullYear() + ' © Keos LLC',
  },
}

export default config
