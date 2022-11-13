<template>
  <b-form @submit="onSubmit" @reset="onReset" class="signup-form">
    <div class="signup-login">
      <h2 class="signup-text">Sign up</h2><br /><br />
      <div class="signup-fields">
        <div class="signup-field">
          <b-form-group id="input-group-1" label="Email:" label-for="email"
            description="">
            <b-form-input v-model="email" id="email" type="email" placeholder="Enter your email" required></b-form-input>
          </b-form-group>
        </div>
        <div class="signup-field">
          <b-form-group id="input-group-3" label="First Name:" label-for="fname"
            description="">
            <b-form-input v-model="fname" id="fname" type="text" placeholder="Enter your First Name" required></b-form-input>
          </b-form-group>
        </div>
        <div class="signup-field">
          <b-form-group id="input-group-4" label="Last Name:" label-for="lname"
            description="">
            <b-form-input v-model="lname" id="lname" type="text" placeholder="Enter your Last Name" required></b-form-input>
          </b-form-group>
        </div>
        <div class="signup-field">
          <b-form-group id="input-group-2" label="Company Name:" label-for="company"
            description="">
            <b-form-input v-model="company" id="company" type="text" placeholder="Where do you work?" required></b-form-input>
          </b-form-group>
        </div>
        <div class="signup-password">
          <b-form-group id="input-group-5" label="Password:" label-for="password" class="mt-3">
            <b-input-group class="mt-3" id="input-group-5">
              <template #append>
                <b-input-group-append>
                  <img src="~/assets/eye9913-9xt.svg" alt="eye9913" class="signup-eye" />
                </b-input-group-append>
              </template>
              <b-form-input v-model="password" id="password" type="password" placeholder="Enter a Password" required></b-form-input>
            </b-input-group>
          </b-form-group>
        </div>
        <b-button type="submit" variant="warning" class="signup-button mt-5">Sign Up</b-button>
        <div class="signup-login1 text-center">
          <span class="signup-text24 body3r text-center">
            Already have an account? <a href="/login" class="btn-link">Login</a>
          </span>
        </div>
      </div>
    </div>
  </b-form>
</template>

<script>
export default {
  name: 'Signup',
  layout: 'unauthenticated-forms',
  metaInfo: {
    title: 'BodAdmin | Sign Up',
  },
  data() {
    return {
      email: '',
      fname: '',
      lname: '',
      company: "",
      password: '',
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      if (!this.email == "" && !this.fname == "" && !this.lname == "") {
        window.location = "/verify-email"
      }
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}

</script>

<style scoped>

</style>