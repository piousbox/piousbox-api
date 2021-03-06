
import axios from 'axios'

class Tag {
  constructor(config) {
    this.config = config
    return this
  }
  get(tagname, delta={}) {
    let query = Object.keys(delta).map(k => `${k}=${delta[k]}`).join('&')
    let url = `${this.config.apiUrl}/api/tags/view/${tagname}.json?${query}`
    let a = axios.get( url ).then(r => {
      return r.data
    }).then(_data => {
      return _data
    })
    return a
  }
}

class Site {
  constructor(config) {
    this.config = config
    return this
  }
  features() {
  }
  all() {
    let url = `${this.config.apiUrl}/api/sites/view/${this.config.domain}.json`
    let a = axios.get( url ).then(r => r.data.site)
    return a
  }
}

export { Tag, Site }

