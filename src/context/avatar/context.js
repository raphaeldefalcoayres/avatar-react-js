import { createContext, useMemo, useState } from "react"

const DEFAULT_VALUE = {
  state: {
    personalization: 'Background',
    background: '#65C9FF',
    skin: 'light',
    top: 'shortWaved',
    hairColor: 'auburn',
    facialHair: 'none',
    facialHairColor: 'auburn',
    accessories: 'none',
    clothing: 'shirtCrewNeck',
    eyes: 'default',
    mouth: 'default',
    animationAvatar: 'animate__animated animate__bounce'
  },
  setState: () => {},
}

const options =  {
  colors: {
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
  },
  skins: {
    tanned: '#FD9841',
    yellow: '#F9D562',
    pale: '#FFDBB4',
    light: '#EDB98A',
    brown: '#D08B5B',
    darkBrown: '#AE5D29',
    black: '#614335'
  },
  hairColors: {
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
  },
  hairs: ['dreads01', 'dreads02', 'frizzle', 'shaggyMullet', 'shaggy', 'shortCurly', 'shortFlat', 'shortRound', 'sides', 'shortWaved', 'theCaesarAndSidePart', 'theCaesar', 'bigHair', 'bob', 'bun', 'curly', 'curvy', 'dreads', 'frida', 'froAndBand', 'fro', 'longButNotTooLong', 'miaWallace', 'shavedSides', 'straightAndStrand', 'straight01', 'straight02', 'eyepatch', 'turban', 'hijab', 'hat', 'winterHat01', 'winterHat02', 'winterHat03', 'winterHat04'],
  accessories: ['none', 'kurt', 'prescription01', 'prescription02', 'round', 'sunglasses', 'wayfarers'],
  facialHairs: ['none', 'beardLight', 'beardMagestic', 'beardMedium', 'moustaceFancy', 'moustacheMagnum'],
  eyes: ['squint', 'closed', 'cry', 'default', 'eyeRoll', 'happy', 'hearts', 'side', 'surprised', 'wink', 'winkWacky', 'xDizzy'],
  clothings: ['blazerAndShirt', 'blazerAndSweater', 'collarAndSweater', 'graphicShirt', 'hoodie', 'overall', 'shirtCrewNeck', 'shirtScoopNeck', 'shirtVNeck'],
  mouths: ['concerned', 'default', 'disbelief', 'eating', 'grimace', 'sad', 'screamOpen', 'serious', 'smile', 'tongue', 'twinkle', 'vomit']
}

const AvatarContext = createContext(DEFAULT_VALUE)

const AvatarContextProvider = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)

  const value = useMemo(() => ({ state, setState, options }), [state])

  return (
    <AvatarContext.Provider value={value}>{children}</AvatarContext.Provider>
  )
}

export { AvatarContextProvider }
export default AvatarContext