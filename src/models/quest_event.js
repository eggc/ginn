import _ from 'lodash'
import Model from './model'

export default class QuestEvent extends Model {
  constructor(id, results, name, body) {
    super(id)
    this.results = results
    this.name = name
    this.body = body
  }

  attributeNames() {
    return ['id', 'name', 'body', 'resultNames']
  }

  resultNames() {
    return this.results.map((r)=>r.name)
  }

  pickResult() {
    return _.sample(this.results)
  }
}
