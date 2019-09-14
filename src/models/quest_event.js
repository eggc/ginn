import Model from './model'

export default class QuestEvent extends Model {
  constructor(id, results, name, body) {
    super()
    this.id = id
    this.results = results
    this.name = name
    this.body = body
  }

  attributeNames() {
    return ['id', 'name', 'body', 'resultSize']
  }

  resultSize() {
    return this.results.length
  }
}
