import React, { useContext, useEffect } from 'react';
import { Context as PictureContext } from '../context/PictureContext';
import SmashComponent from './SmashComponent';
import ImageComponent from './ImageComponent';
import GirlOuch from '../assets/girl_ouch.mp3';
import ManOuch from '../assets/man_ouch.mp3';

let tmr = null;
let tmr2 = null;
let tmr3 = null;

export default function PictureComponent(props) {
  const { state: { personToBeat }, setPicture, setPos } = useContext(PictureContext);

  const playOuch = () => {
    let audio = null;
    if (personToBeat === 'aytekin') {
      audio = new Audio(ManOuch);
    } else {
      audio = new Audio(GirlOuch);
    }
    audio.play();
    if (tmr3) {
      clearTimeout(tmr3);
    }
    tmr3 = setTimeout(() => audio.pause(), 2000);      
  }
  const onLeftHit = (event) => {
    console.log('will play ouch');
    playOuch();
    clearTimeout(tmr);
    clearTimeout(tmr2);
    setPos({ x: event.nativeEvent.pageX,
        y: event.nativeEvent.pageY});
    setPicture('2');
    console.log('will set timeout');
    tmr = setTimeout(() => {
        console.log('will set pict 1');
        setPicture('1');
    }, 2500);
    tmr2 = setTimeout(() => {
        setPos({x: 0, y: 0})
    }, 1000);
  }
  const onRightHit = (event) => {
      playOuch();
      clearTimeout(tmr);
      clearTimeout(tmr2);
      setPos({ x: event.nativeEvent.pageX,
          y: event.nativeEvent.pageY});
      setPicture('3');
      tmr = setTimeout(() => {
          setPicture('1');
      }, 2500);
      tmr2 = setTimeout(() => {
          setPos({x: 0, y: 0})
      }, 1000);
  }
  useEffect(() => {
    return () => {
        console.log('...timers will be cleaned');
        if (tmr) {
            clearTimeout(tmr);
        }
        if (tmr2) {
            clearTimeout(tmr2);
        }
        if (tmr3) {
          clearTimeout(tmr3);
        }
    }
  }, []);

  const onClick = (event) => {
    const { clientX, target: { offsetWidth} } = event;
    if (clientX <= offsetWidth / 2) {
      onLeftHit(event);
    } else {
      // onRightHit(event);
      props.setIsHomeScreen(true);
    }
  }

  return (
    <div style={{
      flex: 1,
    }}>
      <ImageComponent pics={props.pics} onClick={onClick}/>           
      <SmashComponent/>
    </div>
  );  
}
