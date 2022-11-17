<template>
  <div>
    <b-modal id="rename-portfolio-modal" ok-variant="warning" ok-title="Save" size="lg"
      title-html="<h5 class='modal-title'>Rename Portfolio</h5><p class='modal-subtitle'>Rename this portfolio so it can be easily identified.</p>">
      <b-form-group id="input-group-1" label="Portfolio Name" label-for="name" description="">
        <b-form-input id="name" type="text" placeholder="Portfolio 1" required>
        </b-form-input>
      </b-form-group>
      <b-card class="mt-3">
        <div class="row">
          <div class="col-md-9">
            <h5>Portfolio</h5>
            <p><i>No companies added yet.</i></p>
          </div>
          <div class="col-md-3">
            <b-button class="mt-3" variant="light" @click="$bvModal.show('manage-portfolio-modal')">Manage</b-button>
          </div>
        </div>
      </b-card>
      <b-card class="mt-3">
        <div class="row">
          <div class="col-md-9">
            <h5>Members</h5>
            <p><i>No members added yet.</i></p>
          </div>
          <div class="col-md-3">
            <b-button class="mt-3" variant="light" @click="$bvModal.show('manage-members-modal')">Manage</b-button>
          </div>
        </div>
      </b-card>

    </b-modal>
    <DashboardManagePortfolioModal />
    <DashboardManageMembersModal/>
  </div>
</template>