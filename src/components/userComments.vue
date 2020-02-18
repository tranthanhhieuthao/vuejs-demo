<template>
    <div class="card">
        <button  v-on:click="visibleOn()"> {{comment.length}} Comment
        </button>
        <ul class="list-group" v-if="visible">
        <comment
        v-for = "cmt in comment"
        v-bind:key = "cmt.id"
        :cmt = cmt>
        </comment>
        <input
        placeholder="comment here!!"
        v-model="commentNow.body"/>
        <button
        v-on:click="addComment()">
        Send
        </button>
        </ul>
    </div>
</template>
<script>
import DataPostService from '../service/DataPostService'
import comment from '@/components/comment'
export default {
  name: 'userComments',
  data () {
    return {
      comment: [],
      visible: false,
      like: 0,
      commentNow: {
        postId: 1,
        id: Math.floor(Math.random() * 10 + 1),
        name: '',
        email: '',
        body: ''
      }
    }
  },
  props: {
    id: {
      default: 0,
      type: Number
    }
  },
  components: {
    comment
  },
  methods: {
    visibleOn () {
      this.visible = !this.visible
    },
    addComment () {
      console.log(this.comment)
      this.commentNow.postId = this.comment[0].postId
      this.comment.push(this.commentNow)
      this.commentNow = {
        postId: this.comment[0].postId,
        id: Math.floor(Math.random() * 10 + 1),
        name: '',
        email: '',
        body: ''
      }
      this.selectComponentB()
    },
    selectComponentB () {
      this.$emit('emit-change', this.comment.length)
    }
  },
  mounted () {
    DataPostService.commentByUser(this.id)
      .then(Response => {
        this.comment = Response.data
        this.selectComponentB()
      })
  }
}
</script>
