<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" class="signup-form">
      <div class="signup-login">
        <h2 class="signup-text">Login</h2><br /><br />
        <h4>Oyindamola Ehiwere</h4>
        <span style="color:#806500;">oyindamola.ehiwere@uubo.org</span>
        <div class="signup-fields">
          <div class="signup-password">
            <b-form-group id="input-group-5" label="Password:" label-for="password" class="mt-3">
              <b-input-group class="mt-3" id="input-group-5">
                <template #append>
                  <b-input-group-append>
                    <img src="~/assets/eye9913-9xt.svg" alt="eye9913" class="signup-eye" />
                  </b-input-group-append>
                </template>
                <b-form-input v-model="password" id="password" type="password" placeholder="Enter your Password"
                  required></b-form-input>
              </b-input-group>
            </b-form-group>
          </div><br />
          <a href="/forgot-password">Forgot Password?</a>
          <b-button type="submit" variant="warning" class="signup-button mt-5">Continue</b-button>
        </div>
      </div>
    </b-form><br />
    <div class="signup-login1 text-center">
      <span class="signup-text24 body3r text-center">
        Not you? Login with a different account. <a href="/login" class="btn-link">Login</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  layout: 'unauthenticated-forms',
  metaInfo: {
    title: 'BodAdmin | Login Password',
  },
  data() {
    return {

      password: '',
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      if (!this.password == "") {
        window.location = "/dashboard"
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
