import React from 'react'

const ForwardingRefsC = React.forwardRef((props, ref)=> {
    return (
      <div>
          <input type="text" ref={ref}/>
      </div>
    )
  })

export default ForwardingRefsC
