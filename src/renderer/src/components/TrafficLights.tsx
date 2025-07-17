export const TrafficLights = () => {
  const handleClose = () => {
    window.electron.ipcRenderer.send('close-window')
  }
  const handleMinimize = () => {
    window.electron.ipcRenderer.send('minimize-window')
  }
  const handleMaximize = () => {
    window.electron.ipcRenderer.send('maximize-window')
  }
  return (
    <div className="absolute top-2 left-2 flex space-x-2">
      <button
        onClick={handleClose}
        className="w-3 h-3 bg-red-500 rounded-full hover:opacity-80"
      ></button>
      <button
        onClick={handleMaximize}
        className="w-3 h-3 bg-yellow-500 rounded-full hover:opacity-80"
      ></button>
      <button
        onClick={handleMinimize}
        className="w-3 h-3 bg-green-500 rounded-full hover:opacity-80"
      ></button>
    </div>
  )
}
