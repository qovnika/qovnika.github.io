<template>
    <div>
      <b-form @submit="onSubmit" @reset="onReset" class="signup-form">
        <div class="signup-login">
          <h2 class="signup-text">Login</h2><br /><br />
          <div class="signup-fields">
            <div class="signup-field">
              <b-form-group id="input-group-1" label="Email:" label-for="email"
                description="">
                <b-form-input v-model="email" id="email" type="email" placeholder="Enter your email" required></b-form-input>
              </b-form-group>
            </div><br/>
            <a href="/forgot-email">Forgot email?</a>
            <b-button type="submit" variant="warning" class="signup-button mt-5">Continue</b-button>
          </div>
        </div>
      </b-form><br/>
      <div class="signup-login1 text-center">
           <span class="signup-text24 body3r text-center">
             Don't have an account? <a href="/signup" class="btn-link">Sign Up</a>
           </span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'unauthenticated-forms',
  metaInfo: {
    title: 'BodAdmin | Login',
  },
  data() {
    return {
      email: '',
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      if (!this.email == "" || !document.getElementById("email") == null) {
        window.location = "/login-password"
      }
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
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
