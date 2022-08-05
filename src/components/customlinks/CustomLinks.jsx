import { textTransform } from '@mui/system';
import React from 'react'
import { HashLink } from 'react-router-hash-link';

let CustomLinks = (props) => {
  return (
    <HashLink style={{textDecoration: "none", color: `${props.CustomColorValue}`, scrollBehavior: "smooth"}} to={`#${props.pageValue}`}>{props.pageValue}</HashLink>
  )
}

export default CustomLinks