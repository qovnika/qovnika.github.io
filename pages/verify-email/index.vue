<template>
  <div class="whole mt-5">
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <div class="row">
          <div class="col-md-2">
            <div class="steps text-center">
              <img src="~/assets/black.png" alt="Image of Steps for email verification" />
            </div>
          </div>
          <div class="col-md-3"><hr class="line"/></div>
          <div class="col-md-2">
            <div class="steps text-center">
              <img src="~/assets/grey.png" alt="Image of Steps for email verification" />
            </div>
          </div>
          <div class="col-md-3"><hr class="line"/></div>
          <div class="col-md-2">
            <div class="steps text-center">
              <img src="~/assets/grey-2.png" alt="Image of Steps for email verification" />
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
          <div class="col" style="text-align:right;position: relative;right:10px;">Verify email</div>
          <div class="col" style="text-align:center;color:grey;">Company Info</div>
          <div class="col" style="text-align:left;color:grey;">&nbsp;&nbsp;&nbsp;&nbsp;License type</div>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
    <b-form @submit="onSubmit" @reset="onReset" class="signup-form">
      <div class="signup-login">
        <h2 class="signup-text">Verify Email</h2><br /><br />
        <p>
          Enter the verification code sent to <span style="color:#806500;">abdullahi.doe@bodadmin.com</span> to confirm
          your email address.
        </p>
        <div class="signup-fields">
          <div class="signup-field">
            <b-form-group id="input-group-1" label="Verification Code:" label-for="vcode" description="">
              <b-form-input v-model="vcode" id="vcode" type="text" placeholder="Enter Code" required></b-form-input>
            </b-form-group>
          </div>
          <div class="signup-login1 text-center">
            <span class="signup-text24 body3r text-center">
              Didn't get a code? <a href="/verify-email" class="btn-link dark">Resend Code</a>
            </span>
          </div>

          <b-button type="submit" variant="dark" class="signup-button mt-5">Verify</b-button>
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
      vcode: '',
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      if (!this.vcode == "") {
        window.location = "/company-info"
      }
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
