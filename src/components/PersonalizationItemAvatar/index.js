import { Avatar } from "../../lib/avatar"

const PersonalizationItemAvatar = ({ data, set, state, name }) => {
  return data.map((item, index) => {
    const newAvatar = Avatar.create({ width: 120, height: 120, ...state, [name]: item })
    return <div onClick={() => set({ ...state, [name]: item })} key={index} dangerouslySetInnerHTML={{__html: newAvatar}}></div>
  })
}

export default PersonalizationItemAvatar