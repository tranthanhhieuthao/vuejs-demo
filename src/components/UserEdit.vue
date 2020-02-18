<template>
    <div>
        <button @click="BackHome()">Back</button>
        <table class="table table-dark table-striped container" >
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
        <td><input v-model="dataChange.name"/></td>
        <td><input v-model="dataChange.email"/></td>
        <td><input v-model="dataChange.address.street"/></td>
        <td><input v-model="dataChange.address.city"/></td>
        <td><input v-model="dataChange.phone"/></td>
        <td><input v-model="dataChange.website"/></td>
        <td><input v-model="dataChange.company.name"/></td>
        <td><input v-model="dataChange.name"/></td>
      </tr>
    </tbody>
  </table>
  {{dataChange.name}}
    </div>
</template>

<script>
import DataUserService from '../service/DataUserService'
export default {
  name: 'UserEdit',
  data () {
    return {
      dataChange: {
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
    EditDone (id, dataChange) {
      DataUserService.updateData(this.$router.currentRoute.params.id, dataChange)
    },
    BackHome () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  },
  mounted () {
    DataUserService.getDetail(this.$router.currentRoute.params.id)
      .then((Response) => {
        this.dataChange = Response.data
        console.log(this.dataChange)
      })
  }
}
</script>
