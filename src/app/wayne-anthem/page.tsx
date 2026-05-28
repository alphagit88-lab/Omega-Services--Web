import type { Metadata } from 'next'
import WayneAnthem from './WayneAnthem'

export const metadata: Metadata = {
  title: 'Wayne Anthem | Omega Services',
  description: 'Experience the future of fueling with Wayne Anthem AX27 and AX12 dispensers from Omega Services.',
}

export default function Page() {
  return <WayneAnthem />
}
