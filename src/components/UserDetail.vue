<template>
    <div>
        <button v-on:click="BackUser()">Back List User</button>
        <table class="table table-dark table-striped container">
    <thead>
      <tr>
        <th>Name</th>
        <th>User Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>City</th>
        <th>Phone</th>
        <th>website</th>
        <th>Company</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{user.name}}</td>
        <td>{{user.username}}</td>
        <td>{{user.email}}</td>
        <td>{{user.address.street}}</td>
        <td>{{user.address.city}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.website}}</td>
        <td>{{user.company.name}}</td>
      </tr>
    </tbody>
  </table>
    </div>
</template>

<script>
import DataUserService from '../service/DataUserService'
export default {
  name: 'detailUser',
  data () {
    return {
      user: {
        id: 1,
        name: ' ',
        username: ' ',
        email: ' ',
        address: {
          street: ' ',
          suite: ' ',
          city: '  ',
          zipcode: ' ',
          geo: {
            lat: ' ',
            lng: ' '
          }
        },
        phone: ' ',
        website: ' ',
        company: {
          name: ' ',
          catchPhrase: ' ',
          bs: ' '
        }
      }
    }
  },
  methods: {
    BackUser () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  },
  mounted () {
    DataUserService.getDetail(this.$router.currentRoute.params.id)
      .then((Response) => {
        this.user = Response.data
      })
  }
}
</script>
