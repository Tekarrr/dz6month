import {createSlice} from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import {create} from 'zustand'

export const colorChangerSlice = createSlice({
    name: 'ColorChanger',
    initialState: {
        color: 'white'
    },
    reducers: {
        changeColor: (state, action)=>{
            state.color = action.payload
        }
    }
})

const useStore = create((set)=> ({
    colorZ: 'white',
    changeColorZ: (color)=>set({colorZ:color})
}))

const ColorChanger = () => {
    const {colorZ, changeColorZ} = useStore()
    const color = useSelector(state=>state.changeColor.color)
    const dispatch = useDispatch()
  return (
    <div >
        <div style={{background: color, height: 200}}>
            <h3>redux toolkit</h3>
            <button onClick={()=> dispatch(colorChangerSlice.actions.changeColor('red'))}>red</button>
            <button onClick={()=> dispatch(colorChangerSlice.actions.changeColor('black'))}>black</button>
            <button onClick={()=> dispatch(colorChangerSlice.actions.changeColor('brown'))}>brown</button>
        </div>
        <div style={{background: colorZ, height: 200}}>
            <h3>zustand</h3>
            <button onClick={()=>changeColorZ('purple')}>purple</button>
            <button onClick={()=>changeColorZ('green')}>green</button>
            <button onClick={()=>changeColorZ('blue')}>blue</button>
        </div>
    </div>
  )
}

export default ColorChanger