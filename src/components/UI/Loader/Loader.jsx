import React from 'react'
import { useTime, useTransform } from 'framer-motion';
import { LoaderContainer, LoaderStyled } from './LoaderStyle';



const Loader = ({ styles }) => {
    const time = useTime();
    const rotate = useTransform(time, [0, 1200], [0, 360], { clamp: false });

  return (
    <>
    <LoaderContainer>
        <LoaderStyled args={styles} styled={{rotate}} />
    </LoaderContainer>
    
    </>
  )
}

export default Loader