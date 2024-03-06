import React from 'react'

const TaskCompleted = () => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="15" height="15" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_1676_410" transform="scale(0.0111111)"/>

</pattern>
<image id="image0_1676_410" width="90" height="90" xlinkHref="data:image/png;base64,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"/>
</defs>
</svg>

  )
}

export default TaskCompleted