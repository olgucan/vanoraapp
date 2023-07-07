import React from 'react'
import { Button } from './Button'
export const Iframe = () => {
  return (
    <div className='bg-[#434448] py-8 px-8 flex flex-col h-1/2 md:h-[100vh]'>
   <div className="flex justify-between">
   <h1 className='text-[24px] md:text-[40px] text-white font-bold md:w-1/3'>Feel the excellent wet braking with Driveways!</h1>
   <div>
   <Button mobileHidden={true} lgHidden={false}>
    Watch All Videos
    </Button>
   </div>
   </div>
<iframe className='flex-1' src="https://www.youtube.com/embed/fgXgcLIIsjc" title="Feel the excellent wet braking with Driveways! #EnjoyTheDrive"></iframe>
<Button mobileHidden={false} lgHidden={true}>
    Watch All Videos
    </Button>
    </div>
  )
}
