import React from 'react'
import {PropsWithChildren} from "react"

const ChildrenState: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div>
      <div>This is a class</div>
      <div>{children}</div>
    </div>
  )
}

export default ChildrenState
