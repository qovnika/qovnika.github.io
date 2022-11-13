<template>
  <div>
    <b-modal id="loader-modal" title="" visible centered busy hide-backdrop>
      <div class="d-flex justify-content-center">
        <div class="spinner-border text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </b-modal>
    <div class="bodadmin-logo">
      <span class="signup-text28"><span>BodAdmin</span></span>
      <div class="signup-b-o-d-a-d-m-i-n-l-o-g-o">
        <div class="signup-logo">
          <div class="signup-group1882">
            <img src="~/assets/vector9913-r0j.svg" alt="Vector9913" class="signup-vector" />
            <img src="~/assets/vector9913-e9nq.svg" alt="Vector9913" class="signup-vector1" />
            <img src="~/assets/vector9913-10mw.svg" alt="Vector9913" class="signup-vector2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$router.push('/login')
  },
}

</script>

<style>
@import url("./app-local.css")
</style>