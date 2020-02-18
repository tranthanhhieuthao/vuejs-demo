<template>
<div class="container">
    <h2>List All Posts</h2>
    <demo></demo>
    <button class="btn btn-primary" v-on:click="listUser()" >List User</button>
    <div class="row">
  <div class="col-sm-6 col-md-4"  v-for ="post in dataPost" v-bind:key="post.id">
    <div class="thumbnail">
      <!-- <img src="..." alt="..."> -->
      <div class="caption card">
        <h3>{{post.title}}</h3>
        <p>{{post.body}}</p>
        <user-Comments  :id = post.id @emit-change="dataCommentLength"></user-Comments>
        <!-- <p><a href="#" class="btn btn-primary" role="button">Comment</a></p> -->
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import userComments from '@/components/userComments'
import demo from '@/components/demo'
import DataPostService from '../service/DataPostService'
import { EventBus } from '../event-bus.js'
export default {
  name: 'CommentHome',
  data () {
    return {
      dataPost: [],
      sttCmt: 0,
      lengthPost: 0
    }
  },
  methods: {
    listUser () {
      this.$router.push('users')
    },
    listPosts () {
      DataPostService.getAll()
        .then(Response => {
          this.dataPost = Response.data
          this.lengthPost = Response.data.length
          this.sttPosts()
        })
    },
    dataCommentLength (data) {
      this.sttCmt = data
    },
    sttPosts () {
      EventBus.$emit('stt-posts', this.lengthPost)
    }
  },
  components: {
    userComments,
    demo
  },
  mounted () {
    this.listPosts()
    this.dataCommentLength()
  }
}
</script>
