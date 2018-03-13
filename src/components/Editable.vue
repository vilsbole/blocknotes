<template>
  <input v-if="lines === 'single'"
    class="container"
    :value="input"
    @input="update"
  />
  <textarea v-else
    class="container"
    :value="input"
    @input="update">
  </textarea>
</template>

<script>
import _debounce from 'lodash.debounce'

export default {
  name: 'editable',
  props: ['content', 'lines'],
  data () {
    return {
      input: this.content,
    }
  },
  methods: {
    update: _debounce(function (e) {
      this.input = e.target.value
    }, 300)
  }
}
</script>
<style>
.container {
  padding: 0.5em 0.2em;
}
textarea {
  resize: none;
}
</style>
