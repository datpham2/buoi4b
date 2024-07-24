import React, { useEffect, useState } from 'react'

export default function Hook11() {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        function updateWidth() {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', updateWidth)
    }, [])
  return (
    <div>
      <p>Width: {width}</p>
      {/* <div className={isActive ? 'sidebar active'}>
      </div> */}
    </div>
  )
}
