import React from 'react'
import PictureComponent from '../components/PictureComponent';

export default function BeatScreen(props) {
  return (
    <PictureComponent setIsHomeScreen={props.setIsHomeScreen} pics={props.pics}/>
  )
}