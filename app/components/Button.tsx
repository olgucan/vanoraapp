import React, { ReactNode }  from 'react'
interface Props {
    children?: ReactNode,
    mobileHidden :boolean,
    lgHidden:boolean
    // any props that come into the component
}
export const Button = ({children, mobileHidden,lgHidden }: Props) => {
  return (
    <button className={`${mobileHidden && 'hidden'} md:${!lgHidden ? 'flex' : 'hidden'} bg-white text-[#ED1C24] px-4 py-2 border-none uppercase font-bold`} >
        {children}
    </button>
  )
}
