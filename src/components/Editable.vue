<template>
  <div
    contenteditable="true"
    class="container"
    @input="$emit('update:content', $event.target.innerText)">
  </div>
</template>

<script>
export default {
  name: 'editable',
  props: ['content'],
  mounted: function () {
    this.$el.innerText = this.content
  },
  watch: {
    content: function () {
      this.$el.innerText = this.content
    }
  }
}
</script>
<style>
.container {
  padding: 0.5em 0.2em;
}
</style>
