import seeds from '../seeds/characters'
import targetClass from '../models/character'
import Factory from './factory'

export default new Factory(seeds, targetClass)
