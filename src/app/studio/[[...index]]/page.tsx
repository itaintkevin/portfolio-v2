'use client'
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export const metadata = {
  title: "Kevin Paul | Studio",
  description: 'Sanity Studio',
}

export default function StudioPage() {
  return <NextStudio config={config} />
}