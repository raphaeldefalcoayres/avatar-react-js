const PersonalizationItemColor = ({ data, state, set, name, type = 'key' }) => {
  return Object.keys(data).map((key, index) => {
    if(type === 'value') {
      return <div onClick={() => set({ ...state, [name]: data[key] })} key={index} className="circle-color" style={{background: data[key]}}></div>
    } else {
      return <div onClick={() => set({ ...state, [name]: key })} key={index} className="circle-color" style={{background: data[key]}}></div>
    }
  })
}

export default PersonalizationItemColor