import { Canvas } from '@react-three/fiber'
import './App.css'
import { Scene } from './Scene'

function App() {

  return (
    <Canvas camera={{ position: [0,0, 20] }}>
      <color attach="background" args={["#555"]} />
      <Scene />
    </Canvas>
  )
}

export default App
