import { useState } from "react";


const Profile = () => {
  


  

  return (
    
    <svg width="79" height="48" viewBox="0 0 79 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<circle cx="24" cy="24" r="22.5" fill="url(#pattern0)" stroke="#006BFF"/>
<path d="M63 20.5L70 27.5L77 20.5" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_2321_16232" transform="translate(-0.373529) scale(0.00588235)"/>
</pattern>
<image id="image0_2321_16232" width="297" height="170" xlinkHref="data:image/jpeg;base64,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"/>
</defs>
</svg>


  )
}

export default Profile;