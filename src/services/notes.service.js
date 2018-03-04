var _ = require('lodash')

const NOTES = [
  {
    id: '2',
    title: 'Welcome to Notes App 1',
    desc: 'With Notes App 1, you own your own data',
    content: `
    <div>
      With Notes App 1, you own your own data. If you decide you want to switch to a new app, you can easily do so.
    </div>
    <div>
      If you run into any problems using the app, please email muneeb@blockstack.org.
    </div>
    `
  },
  {
    id: '3',
    title: 'Where does it come from?',
    desc: 'Is “maximalism” stealth centralization?',
    content: `
      <div>
        Is “maximalism” stealth centralization?
        Is privacy a fundamental right or a strategy? Is it an effective strategy? (Wegner)
      </div>
      <div>
        “New technology grows the space of the possible.” - Wegner
      </div>
      <div>
        “People need a right to be forgotten to feel secure in their ideas.” - Snowden
      </div>
      <div>
        Increasing “argument surface” may decrease social scalability. (Szabo)
      </div>`
  }, {
    id: '4',
    title: 'Bitcoin: A Peer-to-Peer Electronic Cash System',
    desc: 'A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a',
    content: "A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution. Digital signatures provide part of the solution, but the main benefits are lost if a trusted third party is still required to prevent double-spending. We propose a solution to the double-spending problem using a peer-to-peer network. The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work. The longest chain not only serves as proof of the sequence of events witnessed, but proof that it came from the largest pool of CPU power. As long as a majority of CPU power is controlled by nodes that are not cooperating to attack the network, they'll generate the longest chain and outpace attackers. The network itself requires minimal structure. Messages are broadcast on a best effort basis, and nodes can leave and rejoin the network at will, accepting the longest proof-of-work chain as proof of what happened while they were gone."
  }, {
    id: '5',
    'title': '4 DAPP rules (Shea)',
    'desc': 'Bring your own device, Bring your own ID...',
    'content': `
      <div>- Runs On Your Device</div>
      <div>- Bring Your Own ID</div>
      <div>- Bring Your Own Data</div>
      <div>- Bring your own assets</div>
    `
  }
]

const NotesService = {
  get: (id) => {
    if (!id) return NOTES
    return _.find(NOTES, {'id': id})
  },

  create: (content) => {
    var id = _.last(NOTES).id + 1
    var note = {
      'id': id,
      'title': 'New Note',
      'content': content
    }
    _.concat(NOTES, note)
  },

  update: () => {

  },

  delete: () => {

  }
}

export default NotesService
