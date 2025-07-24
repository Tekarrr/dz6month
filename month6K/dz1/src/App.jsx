import { configureStore } from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import './App.css'
import ColorChanger, { colorChangerSlice } from './components/ColorChanger'

function App() {

  const store = configureStore({
    reducer: {changeColor: colorChangerSlice.reducer}
  })

  return (
    <Provider store={store}>
      <ColorChanger/>
    </Provider>
  )
}

export default App
