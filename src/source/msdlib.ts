import { msdlibinterface } from './interface.js'

const msdlib: msdlibinterface = {
  PORT: null,
  setPort(port: number) {
    this.PORT = port
  },
}

export function initMsdl(port: number) {
  msdlib.setPort(port)
  return msdlib
}
