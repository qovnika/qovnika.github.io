<template>
  <div class="whole mt-5">
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <div class="row">
          <div class="col-md-2">
            <div class="steps text-center">
              <img src="~/assets/green.png" alt="Image of Steps for email verification" />
            </div>
          </div>
          <div class="col-md-3">
            <hr class="line" />
          </div>
          <div class="col-md-2">
            <div class="steps text-center">
              <img src="~/assets/green-2.png" alt="Image of Steps for email verification" />
            </div>
          </div>
          <div class="col-md-3">
            <hr class="line" />
          </div>
          <div class="col-md-2">
            <div class="steps text-center">
              <img src="~/assets/black-3.png" alt="Image of Steps for email verification" />
            </div>
          </div>
        </div>
      </div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <div class="row">
          <div class="col" style="text-align:right;position: relative;right:10px;color:green;">Verify email</div>
          <div class="col" style="text-align:center;color:green;">Company Info</div>
          <div class="col" style="text-align:left;color:black;">&nbsp;&nbsp;&nbsp;&nbsp;License type</div>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
    <div class="steps">
      <img src="" alt="Image of Steps for email verification" />
    </div>
    <b-form @submit="onSubmit" @reset="onReset" class="signup-form">
      <div class="signup-login">
        <h2 class="signup-text">Users</h2><br /><br />
        <p>
          Invite some members of your organization so you can immediately start collaborating.
        </p>
        <div class="signup-fields">
          <div class="signup-field">
            <b-form-group id="input-group-1" label="User:" label-for="user1" description="">
              <b-form-input v-model="user1" id="user1" type="text" placeholder="Enter email" required></b-form-input>
            </b-form-group>
          </div>

          <div class="signup-field">
            <b-form-group id="input-group-1" label="User:" label-for="user2" description="">
              <b-form-input v-model="user2" id="user2" type="text" placeholder="Enter email"></b-form-input>
            </b-form-group>
          </div>

          <div class="signup-field">
            <b-form-group id="input-group-1" label="User:" label-for="user3" description="">
              <b-form-input v-model="user3" id="user3" type="text" placeholder="Enter email"></b-form-input>
            </b-form-group>
          </div>

          <b-button type="submit" variant="dark" class="signup-button mt-5">Next</b-button>
        </div>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Verify-Email-Address',
  layout: 'unauthenticated-forms',
  metaInfo: {
    title: 'BodAdmin | Verify Email',
  },
  data() {
    return {
      user1: '',
      user2: '',
      user3: '',
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      if (this.user1 || this.user2 || this.user3) window.location = "http://localhost:3000"
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''

      // Tick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}

</script>

<style scoped>
@import './app-local.css'
</style>
