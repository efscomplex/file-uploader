import { styled } from 'goober';
import React from 'react';

function Uploader({className, ...props}, ref){
   return (
      <Wrap className={className}> 
         <span> Choose a File</span>
         <input ref={ref} {...props}></input>
      </Wrap>
   )
}
const Wrap = styled('div')`
   width: fit-content;
   border-radius: 9px;
   color: white;
   padding: .6rem 1.4rem;
   background-color: var(--dark-accent);
   position: relative;
   cursor: pointer;
   &:hover {
      transform: scale(1.075);
   }
   input {
      position: absolute;
      opacity: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
   }
`
export default styled(React.forwardRef(Uploader))``