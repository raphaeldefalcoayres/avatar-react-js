import { useContext, useEffect } from "react"
import SvgSaver from "svgsaver"

import AvatarContext from "../../context/avatar/context"
import { usePrevious } from "../../hooks/usePrevious"
import { Avatar } from "../../lib/avatar"
import PersonalizationItemAvatar from "../PersonalizationItemAvatar"
import PersonalizationItemColor from "../PersonalizationItemColor"

function AvatarApp() {
  const handleDownloadSvg = () => {
    const svgsaver = new SvgSaver()
    const svg = document.querySelector('#avatar')
    svgsaver.asSvg(svg, 'avatar.svg')
  }

  const { state, setState, options } = useContext(AvatarContext)

  const generateSvgAvatar = Avatar.create({ width: 280,height: 280, ...state })

  const personalizationComponents = {
    Background: {
      items: <PersonalizationItemColor data={options.colors} set={setState} state={state} name="background" type="value" />
    },
    Pele: {
      items: <PersonalizationItemColor data={options.skins} set={setState} state={state} name="skin" />
    },
    Cabelo: {
      items: <PersonalizationItemAvatar data={options.hairs} set={setState} state={state} name="top" />,
      colors: <PersonalizationItemColor data={options.hairColors} set={setState} state={state} name="hairColor" type="key"/>
    },
    Barba: {
      items: <PersonalizationItemAvatar data={options.facialHairs} set={setState} state={state} name="facialHair" />,
      colors: <PersonalizationItemColor data={options.hairColors} set={setState} state={state} name="facialHairColor" />
    },
    'Acessórios': {
      items: <PersonalizationItemAvatar data={options.accessories} set={setState} state={state} name="accessories" />
    },
    Roupa: {
      items: <PersonalizationItemAvatar data={options.clothings} set={setState} state={state} name="clothing" />
    },
    Olhos: {
      items: <PersonalizationItemAvatar data={options.eyes} set={setState} state={state} name="eyes" />
    },
    Boca: {
      items: <PersonalizationItemAvatar data={options.mouths} set={setState} state={state} name="mouth" />
    },
  }

  const prevState = usePrevious(state)

  useEffect(() => {
    if (prevState && prevState !== state) {
      setState({ ...state, animationAvatar: '' })
      setTimeout(() => {
        setState({ ...state, animationAvatar: 'animate__animated animate__headShake'})
      }, 10)
    }
  }, [state.background, state.skin, state.accessories, state.clothing, state.eyes, state.mouth, state.top, state.hairColor, state.facialHair, state.facialHairColor])

  return (
    <div className="container">
    <input className="name-avatar" placeholder="Nome do meu avatar" />
    <div className="box">
      <div className="box-avatar">
        <div id="avatar" className={state.animationAvatar} dangerouslySetInnerHTML={{__html: generateSvgAvatar}}></div>
      </div>
      <div className="download-svg" onClick={() => handleDownloadSvg()}>Fazer download</div>
      <div className="box-personalizations">
        <div className="type-personalizations">
          {
            Object.keys(personalizationComponents).map(p => (
              <div
                onClick={() => setState({ ...state, personalization: p })}
                className={`item-type-personalization ${state.personalization === p ? 'active' : ''}`}
                key={p}
              >
                {p}
              </div>
              ))
          }
        </div>
      </div>
      { personalizationComponents && personalizationComponents[state.personalization] && personalizationComponents[state.personalization].colors && <div className="color-by-personalizations">{personalizationComponents[state.personalization].colors}</div>}
      <div className="personalizations">
        {personalizationComponents && personalizationComponents[state.personalization] && personalizationComponents[state.personalization].items}
      </div>
    </div>
  </div>
  )
}

export default AvatarApp