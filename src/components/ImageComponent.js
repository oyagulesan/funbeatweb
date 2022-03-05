import React, { useContext } from 'react';
import { Context as PictureContext } from '../context/PictureContext';
import '../styles/styles.css';

export default function ImageComponent(props) {
  const { state: { picture, personToBeat } } = useContext(PictureContext);
  return (
    <img src={props.pics[personToBeat+picture]}
      alt="PersonToBeat"
      className="pictureStyle"
      onClick={props.onClick}
    />
  )
}
