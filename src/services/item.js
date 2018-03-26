import merge from 'lodash.merge'
import shortid from 'shortid'

export default class Item {
  constructor (payload) {
    this._updated = new Date()
    this._created = payload._created ? payload._created : new Date()
    this.id = payload.id ? payload.id : shortid.generate()

    /* deep copy of payload to object properties */
    merge(this, payload)
  }

  updateTime () {
    this._updated = new Date()
  }
}
