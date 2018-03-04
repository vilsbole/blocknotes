<template>
  <div class="home-container">
    <notes-list class="sidebar" :notes="notes"></notes-list>
    <router-view class="main"></router-view>
  </div>
</template>

<script>
import NotesList from './Notes.list'
import NoteService from '../services/notes.service'
import storage from '../services/storage_js'
import collection from '../services/collection_js'
import { Person,loadUserData,lookupProfile } from 'blockstack'

const blockStack = storage();
const notes = new collection({
  type: "note",
  storage: blockStack,
  userID:"johngordon.id"
});

let publish = async () =>{
  await notes.createItem({
    "txt": "im a note!"
  }).then( async (res)=>{
    const item = await notes.getItem(res.id)
    console.log('get on item',item)
  });
  
}
publish()
let p = 
console.log("lalal",new Person(loadUserData().profile))
lookupProfile("johngordon.id").then(async (u)=>{
  console.log("APPPPPS",u.apps)
  let items = await notes.getUserData(Object.values(u.apps),"note");
  console.log("items",items)
}).catch((err)=>{console.log("err",err)} )
export default {
  name: 'Home',
  components: {
    NotesList
  },
  data () {
    return {
      msg: 'Welcome to Blockstack Notes',
      notes: NoteService.get()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-container {
  display: flex;
  flex: 1;
  flex-direction: row;
}
.sidebar {
  flex: 1;
}
.main {
  flex: 3;
}
</style>
