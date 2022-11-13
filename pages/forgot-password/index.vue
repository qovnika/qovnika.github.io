<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" class="signup-form">
      <div class="signup-login">
        <h2 class="signup-text">Forgot Password</h2><br /><br />
        <p>A password reset code has been sent to <span
            style="color:#806500;">oyindamola.ehiwere@uubo.org</span>.<br />Kindly enter the code below to continue.</p>
        <div class="signup-fields">
          <b-form-group id="input-group-1" label="Reset code:" label-for="code"
            description="">
            <b-form-input id="code" v-model="code" type="text" placeholder="Enter code" required></b-form-input>
          </b-form-group><br />
          <b-button type="submit" variant="warning" class="signup-button mt-5">Continue</b-button>
        </div>
      </div>
    </b-form><br />
    <div class="signup-login1 text-center">
      <span class="signup-text24 body3r text-center">
        Haven't received a code? <a href="#" class="btn-link">Resend code</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Forgot-Password',
  layout: 'unauthenticated-forms',
  metaInfo: {
    title: 'BodAdmin | Forgot Password',
  },
  data() {
    return {
      code: '',
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      if (!this.code == "") {
        window.location = "/reset-password"
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