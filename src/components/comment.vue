<template>
    <div>
           <li class="list-group-item" >{{cmt.body}}
            <span class="badge badge-primary badge-pill">
               <button v-on:click="likeOn()">+</button>
             </span>
             <span class="badge badge-primary badge-pill">{{like}}</span>
           </li>
    </div>
</template>

<script>
export default {
  name: 'commnent',
  data () {
    return {
      comment: [],
      like: 0
    }
  },
  props: {
    cmt: {}
  },
  methods: {
    likeOn () {
      this.like++
    }
  }
}
</script>
