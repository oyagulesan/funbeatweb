import React, { useContext } from 'react';
import { Context as PictureContext } from '../context/PictureContext';

export default function SmashComponent() {
  const { state: { picture, pos }} = useContext(PictureContext);

  return (
      <>
      { pos && pos.x !== 0 && pos.y !== 0 && picture !== '1' ? 
      <img
        src={require('../assets/effect.png')}
        alt="Smash"
      /> : null}
  </>
  );
}
