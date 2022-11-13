<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" class="signup-form">
      <div class="signup-login">
        <div class="icon-div">
          <i class="bi bi-check-lg"></i>
        </div>
        <h2 class="signup-text" style="display:block;margin:auto;">Reset Successful</h2><br /><br />
        <p class="text-center">Your password has been successfully reset, go back to login to continue.</p>
        <div class="signup-fields">
          <b-button type="submit" variant="warning" class="signup-button mt-5">Back to login</b-button>
        </div>
      </div>
    </b-form><br />
    <div class="signup-login1 text-center">
      <span class="signup-text24 body3r text-center">
        <a href="/login" class="btn-link">Back to Login</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reset-Password',
  layout: 'unauthenticated-forms',
  metaInfo: {
    title: 'BodAdmin | Reset Password',
  },
  data() {
    return {
      form: {
        password: '',
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
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