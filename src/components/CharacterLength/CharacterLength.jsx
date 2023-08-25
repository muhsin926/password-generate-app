import React from 'react'

const CharacterLength = ({state, setState}) => {
  return (
    <div>
    <div className='flex justify-between'>
        <h2 style={{fontWeight: 600,color: 'white'}}>Character Length</h2>
        <h2 style={{fontWeight: 600,color: 'white'}}>{state}</h2>
    </div>
    <input style={{width: '100%'}} type="range" min={1} max={16} value={state} onChange={(e) => setState(e.target.value)} />
    </div>
  )
}

export default CharacterLength