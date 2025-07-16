import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
if(!process.contextIsolated){
  throw new Error('context isolation must be enabled in the BrowserWWindow')
}

try{
  contextBridge.executeInMainWorld('context',{

  })
}catch(error){
  console.error(error)
}