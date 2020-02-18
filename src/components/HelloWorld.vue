<template>
<div class="container">
  <h2>List users</h2>
  <button v-on:click='BackHome()'>BACK HOME</button>
  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>Email</th>
        <th>ADDRESS</th>
        <th>PHONE</th>
        <th>COMPANY</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody v-for="data in datas" v-bind:key="data.id">
      <tr>
        <td>{{data.id}}</td>
        <td>{{data.name}}</td>
        <td>{{data.email}}</td>
        <td>{{data.address.city}}</td>
        <td>{{data.phone}}</td>
        <td>{{data.company.name}}</td>
        <td>
          <button v-on:click="deleteById(data.id)">Delete</button>
          <button v-on:click="detailById(data.id)">Detail</button>
           <button v-on:click="EditUser(data.id)">Edit</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

</template>
<script>
import DataUserService from '../service/DataUserService'

export default {
  name: 'HelloWorld',
  data () {
    return {
      datas: [],
      dataPostByUser: []
    }
  },
  methods: {
    danhSach () {
      DataUserService.getAll()
        .then((Response) => {
          this.datas = Response.data
        })
      return this.datas
    },
    deleteById (id) {
      DataUserService.deleteData(id)
        .then(Response => {
          this.datas = this.datas.filter(item => {
            return item.id !== id
          })
        })
    },
    detailById (id) {
      this.$router.push(`users/` + id)
    },
    EditUser (id) {
      this.$router.push(`users/edit/` + id)
    },
    BackHome () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  },
  mounted () {
    this.danhSach()
  }
}
</script>
