'use client'
import Loader from '@/components/Loader'

export default function loading() {
  return (
    <div className='grid place-items-center h-screen'>
      <Loader/>
    </div>
  )
}
