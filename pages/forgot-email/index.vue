<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" class="signup-form">
      <div class="signup-login">
        <h2 class="signup-text">Forgot Email</h2><br /><br />
        <p>
          Kindly contact your admin to rectify this issue.
        </p>
        <b-button type="submit" variant="warning" class="signup-button mt-5">Back to Login</b-button>
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
  name: 'Forgot-email',
  layout: 'unauthenticated-forms',
  metaInfo: {
    title: 'BodAdmin | Forgot Email',
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      window.location = "/login"
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
