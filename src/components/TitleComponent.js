import React from 'react';

export default function TitleComponent(props) {
  return (
    <div style={{
      flex: 1,
      position: 'absolute',
      top: 0,
      left: -20,
      width: 120,
      backgroundColor: '#007799',
      alignContent: 'center',
      flexDirection: 'row',
      alignItems: 'center'
  }}>
      <span style={{flex: 1, marginRight: 50, textAlign: 'center', color: '#eee', fontSize: 24, fontWeight:'bold'}}>BEAT!!!</span>
  </div>
)
}
