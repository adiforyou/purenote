import { TrafficLights } from './TrafficLights'

export const DraggableTopbar = () => {
  return (
    <header className="absolute inset-0 h-8  bg-transparent ">
      <TrafficLights />
    </header>
  )
}
