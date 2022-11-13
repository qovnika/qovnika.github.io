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
              <img src="~/assets/black-2.png" alt="Image of Steps for email verification" />
            </div>
          </div>
          <div class="col-md-3">
            <hr class="line" />
          </div>
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
          <div class="col" style="text-align:right;position: relative;right:10px;color:green;">Verify email</div>
          <div class="col" style="text-align:center;color:black;">Company Info</div>
          <div class="col" style="text-align:left;color:grey;">&nbsp;&nbsp;&nbsp;&nbsp;License type</div>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
    <b-form @submit="onSubmit" @reset="onReset" class="signup-form">
      <div class="signup-login">
        <h2 class="signup-text">Company Information</h2><br /><br />
        <p>
          Enter more information about your organization.
        </p>
        <div class="signup-fields">
          <div class="signup-field">
            <b-form-group id="input-group-1" label="Number of Employees:" label-for="emps" description="">
              <b-form-input v-model="emps" id="emps" type="text" placeholder="How many people work here?" required>
              </b-form-input>
            </b-form-group>
          </div>
          <div class="signup-field">
            <b-form-group id="input-group-1" label="Company Address:" label-for="address" description="">
              <b-form-input v-model="address" id="address" type="text" placeholder="Enter Address" required>
              </b-form-input>
            </b-form-group>
          </div>
          <div class="signup-field">
            <b-form-group id="input-group-1" label="Company Registration Number:" label-for="reg_no" description="">
              <b-form-input v-model="reg_no" id="reg_no" type="text" placeholder="Enter Registration Number" required>
              </b-form-input>
            </b-form-group>
          </div>
          <div class="signup-field">
            <b-form-group id="input-group-1" label="Company Sector:" label-for="sector" description="">
              <b-form-select v-model="selected" :options="options" class="form-control"></b-form-select>
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
  name: 'Company-Info',
  layout: 'unauthenticated-forms',
  metaInfo: {
    title: 'BodAdmin | Company Information',
  },
  data() {
    return {
      form: {
        emps: '',
        address: '',
        reg_no: '',
        sector: ''
      },
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'Agriculture', text: 'Agriculture' },
        { value: 'Information Technology', text: 'Information Technology' },
        { value: 'Manufacturing', text: 'Manufacturing' },
        { value: 'Pharmaceuticals', text: 'Pharmaceuticals' }
      ],
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      if (!this.emps == "") {
        window.location = "/select-license-type"
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
