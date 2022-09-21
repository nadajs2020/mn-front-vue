<template>
  <MainLayout />
  <div class="container pt-5 pb-5">
    <div class="row">
      <div class="col">
        <form class="row g-3 needs-validation" method="POST" @submit.prevent="addNewUser($event)">
          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder=" Name" name="name" />
              <label for="floatingInput"> Name</label>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="email@email.com" name="email" />
              <label for="floatingInput">Email</label>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="floatingInput" placeholder="Phone" name="password" />
              <label for="floatingInput">password</label>
            </div>
          </div>
          <div class="col-12 d-grid">
            <button class="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import MainLayout from "@/components/Layouts/MainLayout.vue";
import axios from "axios";
import $ from "jquery";
export default {
  name: "AddUser",
  components: {
    MainLayout,
  },
  created() {
    // GET request for remote image in node.js
    axios({
      method: "post",
      url: "http://localhost:5000/api/user/register",
      responseType: "stream",
    }).then((response) => {
      console.log(response.data);
    }).catch((err) => {
      console.log(err)
    });
  },
  methods: {
    addNewUser (event) {
        let e = event.target;
        let mypost = $(e).serializeArray();
        alert("success")
        let mydata = $.post(this.user_url, {addNewUser : mypost});
        console.log(this.user_url);
         mydata.done((data) => {
          console.log(data);
        });
       }
  }
};
</script>
