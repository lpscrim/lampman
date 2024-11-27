'use client' 
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='text-center h-screen py-20 px-20'>
      <h2 className='text-4xl font-semibold mb-4'>Something went wrong!</h2>
      <p className="text-xl font-semibold mb-10" >Error: {String(error)}</p>
      <button className="
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-text2
                text-base
                font-bold
                flex
                items-center
                justify-center
                leading-none
                text-primary
                bg-secondary
                w-full
                py-4
                hover:bg-secondaryh
                rounded-md
            "
        onClick={
          () => reset()
        }
      >
        Reload
      </button>
    </div>
  )
}