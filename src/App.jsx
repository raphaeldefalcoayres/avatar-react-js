import { useState } from 'react';
import './App.css';
import { Avatar } from './lib/avatar'

function App() {
  const [personalization, setPersonalization] = useState('Background')
  const [backgroundColor, setBackgroundColor] = useState('#65C9FF')
  const [skinColor, setSkinColor] = useState('light')
  const [hair, setHair] = useState('shortWaved')
  const [facialHair, setFacialHair] = useState('none')
  const [acessorie, setAcessorie] = useState('none')
  const [hairColor, setHairColor] = useState('auburn')
  const [facialHairColor, setFacialHairColor] = useState('auburn')
  const [clothing, setClothing] = useState('shirtCrewNeck')

  const generateSvgAvatar = Avatar.create({ width: 300,height: 300, background: backgroundColor, skin: skinColor, top: hair, hairColor: hairColor, facialHair: facialHair, accessories: acessorie, facialHairColor: facialHairColor, clothing: clothing })
  const personalizations = [
    'Background',
    'Cor da pele',
    'Cabelo',
    'Cor do cabelo',
    'Barba',
    'Cor da barba',
    'Acessórios',
    'Roupa',
    'Desenho da roupa',
    'Olhos',
    'Boca'
  ]
  const colors = {
    black: '#262E33',
    blue01: '#65C9FF',
    blue02: '#5199E4',
    blue03: '#25557C',
    gray01: '#E5E5E5',
    gray02: '#929598',
    heather: '#3C4F5C',
    pastelBlue: '#B1E2FF',
    pastelGreen: '#A7FFC4',
    pastelOrange: '#FFDEB5',
    pastelRed: '#FFAFB9',
    pastelYellow: '#FFFFB1',
    pink: '#FF488E',
    red: '#FF5C5C',
    white: '#FFFFFF'
  }

  const skins = {
    tanned: '#FD9841',
    yellow: '#F9D562',
    pale: '#FFDBB4',
    light: '#EDB98A',
    brown: '#D08B5B',
    darkBrown: '#AE5D29',
    black: '#614335'
  }

  const hairColors = {
    auburn: '#A55728',
    black: '#2C1B18',
    blonde: '#B58143',
    blondeGolden: '#D6B370',
    brown: '#724133',
    brownDark: '#4A312C',
    pastelPink: '#F59797',
    platinum: '#ECDCBF',
    red: '#C93305',
    silverGray: '#E8E1E1',
  }

  const hairs = [
    'dreads01', 'dreads02', 'frizzle', 'shaggyMullet', 'shaggy', 'shortCurly', 'shortFlat', 'shortRound', 'sides', 'shortWaved', 'theCaesarAndSidePart', 'theCaesar', 'bigHair', 'bob', 'bun', 'curly', 'curvy', 'dreads', 'frida', 'froAndBand', 'fro', 'longButNotTooLong', 'miaWallace', 'shavedSides', 'straightAndStrand', 'straight01', 'straight02', 'eyepatch', 'turban', 'hijab', 'hat', 'winterHat01', 'winterHat02', 'winterHat03', 'winterHat04'
  ]

  const acessories = [
    'none', 'kurt', 'prescription01', 'prescription02', 'round', 'sunglasses', 'wayfarers'
  ]

  const facialHairs = [
    'none', 'beardLight', 'beardMagestic', 'beardMedium', 'moustaceFancy', 'moustacheMagnum'
  ]

  const clothings = [
    'blazerAndShirt', 'blazerAndSweater', 'collarAndSweater', 'graphicShirt', 'hoodie', 'overall', 'shirtCrewNeck', 'shirtScoopNeck', 'shirtVNeck'
  ]

  let itensPersonalization = []

  if(personalization === 'Background') {
    itensPersonalization = Object.keys(colors).map((key, index) => {
      return <div onClick={() => setBackgroundColor(colors[key])} key={index} className="circle-color" style={{background: colors[key]}}></div>
    })
  } else if (personalization === 'Cor da pele') {
    itensPersonalization = Object.keys(skins).map((key, index) => {
      return <div onClick={() => setSkinColor(key)} key={index} className="circle-color" style={{background: skins[key]}}></div>
    })
  } else if (personalization === 'Cabelo') {
    itensPersonalization = hairs.map((hair, index) => {
      const newAvatar = Avatar.create({ width: 128,height: 128, background: backgroundColor, skin: skinColor, top: hair, hairColor: hairColor, facialHair: facialHair, accessories: acessorie, facialHairColor: facialHairColor, clothing: clothing })
      return <div onClick={() => setHair(hair)} key={index} dangerouslySetInnerHTML={{__html: newAvatar}}></div>
    })
  } else if (personalization === 'Barba') {
    itensPersonalization = facialHairs.map((facialHair, index) => {
      const newAvatar = Avatar.create({ width: 128,height: 128, background: backgroundColor, skin: skinColor, top: hair, hairColor: hairColor, facialHair: facialHair, accessories: acessorie, facialHairColor: facialHairColor, clothing: clothing })
      return <div onClick={() => setFacialHair(facialHair)} key={index} dangerouslySetInnerHTML={{__html: newAvatar}}></div>
    })
  } else if (personalization === 'Acessórios') {
    itensPersonalization = acessories.map((acessorie, index) => {
      const newAvatar = Avatar.create({ width: 128,height: 128, background: backgroundColor, skin: skinColor, top: hair, hairColor: hairColor, facialHair: facialHair, accessories: acessorie, facialHairColor: facialHairColor, clothing: clothing })
      return <div onClick={() => setAcessorie(acessorie)} key={index} dangerouslySetInnerHTML={{__html: newAvatar}}></div>
    })
  } else if (personalization === 'Roupa') {
    itensPersonalization = clothings.map((clothing, index) => {
      const newAvatar = Avatar.create({ width: 128,height: 128, background: backgroundColor, skin: skinColor, top: hair, hairColor: hairColor, facialHair: facialHair, accessories: acessorie, facialHairColor: facialHairColor, clothing: clothing })
      return <div onClick={() => setClothing(clothing)} key={index} dangerouslySetInnerHTML={{__html: newAvatar}}></div>
    })
  } else if (personalization === 'Cor do cabelo') {
    itensPersonalization = Object.keys(hairColors).map((key, index) => {
      return <div onClick={() => setHairColor(key)} key={index} className="circle-color" style={{background: hairColors[key]}}></div>
    })
  } else if (personalization === 'Cor da barba') {
    itensPersonalization = Object.keys(hairColors).map((key, index) => {
      return <div onClick={() => setFacialHairColor(key)} key={index} className="circle-color" style={{background: hairColors[key]}}></div>
    })
  }

  return (
    <div className="container">
      <input className="name-avatar" placeholder="Nome do meu avatar" />
      <div className="box">
        <div className="box-avatar">
          <div id="avatar" dangerouslySetInnerHTML={{__html: generateSvgAvatar}}></div>
        </div>
        <div className="box-personalizations">
          <div className="type-personalizations">
            {
              personalizations.map(personalization => (<div onClick={() => setPersonalization(personalization)} className="item-type-personalization" key={personalization}>{personalization}</div>))
            }
          </div>
        </div>
        <div className="personalizations">
          {itensPersonalization}
        </div>
      </div>
    </div>
  );
}

export default App;
