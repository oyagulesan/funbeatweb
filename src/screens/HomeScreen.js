import React, { useContext, useState } from 'react';
import { Context as PictureContext} from '../context/PictureContext';
import BeatScreen from './BeatScreen';

export default function HomeScreen() {
  const { setPersonToBeat } = useContext(PictureContext);
  const [isHomeScreen, setIsHomeScreen] = useState(true);

  const persons = [
      { name: 'ece' },
      { name: 'aytekin' }
  ];
  const pics = {
      'ece1': require('../assets/ece11.jpg'),
      'ece2': require('../assets/ece12.jpg'),
      'ece3': require('../assets/ece13.jpg'),
      'aytekin1': require('../assets/aytekin11.jpg'),
      'aytekin2': require('../assets/aytekin12.jpg'),
      'aytekin3': require('../assets/aytekin13.jpg'),
      'effect': require('../assets/effect.png')
  };

  const selectPerson = (item) => {
    setPersonToBeat(item.name);
    setIsHomeScreen(false);
  }
const renderItem = (item) => {
    return (
        <div
            style={{ flex: 1 }}
            key={item.name}
        >
            <div style={{ flex: 1, padding: 20, flexDirection: 'row', borderColor: '#554477', borderWidth: 2 }}>
                <span style={{ flex: 2, color: 'white', fontSize: 20 }}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
                <img
                    src={pics[item.name + "1"]}
                    alt={item}
                    onClick={() => selectPerson(item)}
                />
            </div>
        </div>
    )
}
return isHomeScreen ?
  <div style={{ flex: 1 }}>
    <span style={{ flex: 1, fontSize: 20, color: 'white', textAlign: 'center' }}>Select person to beat :)</span>
    <div style={{ flex: 6 }}>
        { persons.map((person) => {
          return renderItem(person);
        })}
    </div>
  </div>
  :
  <BeatScreen pics={pics} setIsHomeScreen={setIsHomeScreen} />
};