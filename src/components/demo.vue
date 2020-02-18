<template>
    <div>{{stt}}</div>
</template>

<script>
import { EventBus } from '../event-bus.js'
export default {
  name: 'demo',
  data () {
    return {
      stt: 0
    }
  },
  methods: {
    lengthPost () {
      EventBus.$on('stt-posts', click => {
        this.stt = click
      })
    }
  },
  mounted () {
    this.lengthPost()
  }
}
</script>
