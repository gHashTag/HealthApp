import { makeAutoObservable } from 'mobx'

interface MoodT {
  one: boolean
  two: boolean
  three: boolean
  four: boolean
  five: boolean
}

class Diary {
  mood = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false
  }

  anxiety = 0

  stress = 0

  constructor() {
    makeAutoObservable(this)
  }

  setMood(obj: MoodT) {
    this.mood = { ...obj }
  }

  setAnxienty(arg: number) {
    this.anxiety = arg
  }

  setStress(arg: number) {
    this.stress = arg
  }

  reset() {
    this.mood = {
      one: false,
      two: false,
      three: false,
      four: false,
      five: false
    }
    this.anxiety = 0
    this.stress = 0
  }
}

export default new Diary()
