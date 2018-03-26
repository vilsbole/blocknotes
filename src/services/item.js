import merge from 'lodash.merge'
import shortid from 'shortid'
import format from 'date-fns/format'

export default class Item {
  constructor (payload) {
    this._updated = format(new Date(), 'X')
    this._created = payload._created ? payload._created : format(new Date(), 'X')
    this.id = payload.id ? payload.id : shortid.generate()

    /* deep copy of payload to object properties */
    merge(this, payload)
  }

  updateTime () {
    this._updated = format(new Date(), 'X')
  }
}
