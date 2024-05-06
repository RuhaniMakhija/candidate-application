import React from 'react'

const Avatar = () => {
  return (
    <div 
  className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-17o22dy-MuiAvatar-root" 
  style={{ height: "50px", width: "50px" }}
>
  <svg 
    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiAvatar-fallback css-10mi8st-MuiSvgIcon-root-MuiAvatar-fallback" 
    focusable="false" 
    aria-hidden="true" 
    viewBox="0 0 24 24" 
    data-testid="PersonIcon"
  >
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
  </svg>
</div>

  )
}

export default Avatar
