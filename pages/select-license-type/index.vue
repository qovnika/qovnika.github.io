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
    <b-form @submit="onSubmit" @reset="onReset" class="signup-form">
      <div class="signup-login">
        <h2 class="signup-text">License Type:</h2><br /><br />
        <p>
          Select which License you would like to purchase. You could find more information about Licensing in our <a
            href="#"><span style="color:#806500;">Pricing</span></a> page.
        </p>
        <div class="signup-fields">
          <b-form-group label="" v-slot="{ ariaDescribedby }">
            <div class="container">
              <span class="radio-label">Startup</span>
              <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="Startup"
                class="radio"> </b-form-radio>
            </div>
            <div class="container">
              <span class="radio-label">Standard</span>
              <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="Standard"
                class="radio"> </b-form-radio>
            </div>
            <div class="container">
              <span class="radio-label">Enterprise License</span>
              <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios"
                value="Enterprise License" class="radio"> </b-form-radio>
            </div>
          </b-form-group>

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
    title: 'BodAdmin | Select License Type',
  },
  data() {
    return {
      selected: ""
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      if (this.selected) window.location = "/loading"
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.email = ''

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
