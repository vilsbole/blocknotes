<template>
  <div
    contenteditable="true"
    class="container"
    @input="contentChange($event)">
    {{ values }}
  </div>
</template>

<script>
export default {
  name: 'editable',
  props: ['content', 'name'],
  data: () => {
    return {
      values: ''
    }
  },
  mounted: function () {
    this.values = this.content
  },
  watch: {
    content: function () {
      this.values = this.content
    }
  },
  methods: {
    contentChange (event) {
      this.$emit('editing', {
        name: this.name,
        value: event.target.innerText
      })
    }
  }
}
</script>
<style>
.container {
  padding: 0.5em 0.2em;
}
</style>
