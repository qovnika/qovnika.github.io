<template>
    <b-navbar toggleable type="dark" variant="dark">
        <div class="row" style="padding:0.5rem 0px;">
          <div class="col-md-3">
            <b-navbar-brand href="#">
              <b-navbar-toggle target="navbar-toggle-collapse">
                <template #default="{ expanded }">
                  <b-icon v-if="expanded" icon="list"></b-icon>
                  <b-icon v-else icon="list"></b-icon>
                </template>
              </b-navbar-toggle>&nbsp;
              <b-icon icon="grid" style="margin-left:20px;color:#FFCA00;"></b-icon> Dashboard
            </b-navbar-brand>
  
            <b-collapse id="navbar-toggle-collapse" is-nav>
              <div class="bodadmin-logo">
                <span class="signup-text28"><span>BodAdmin</span></span>
                <div class="signup-b-o-d-a-d-m-i-n-l-o-g-o">
                  <div class="signup-logo">
                    <div class="signup-group1882">
                      <img src="~/assets/vectors/left-vector.svg" alt="Vector9913" class="signup-vector" />
                      <img src="~/assets/vector9913-e9nq.svg" alt="Vector9913" class="signup-vector1" />
                      <img src="~/assets/vectors/right-vector.svg" alt="Vector9913" class="signup-vector2" />
                    </div>
                  </div>
                </div>
              </div>
  
              <b-navbar-toggle target="navbar-toggle-collapse" class="closer">
                <template #default="{ expanded }">
                  <b-icon icon="x"></b-icon>
                </template>
              </b-navbar-toggle>
              <div>
                <div class="dashboard-menu">
                  <b-icon icon="grid" style="color:#FFCA00;"></b-icon> Dashboard
                </div>
              </div><br />
              <b-navbar-nav class="ml-auto" style="margin:auto;width:80%;">
                <b-nav-item href="#">
                  <b-icon icon="gear-fill"></b-icon> Manage Enterprise
                </b-nav-item>
                <hr style="color:grey;" />
                <b-nav-item href="#">
                  <b-icon icon="question-circle-fill"></b-icon> Help
                </b-nav-item>
                <b-nav-item href="#"><span style="color:#E0775D;">
                    <b-icon icon="box-arrow-right"></b-icon> Logout
                  </span></b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </div>
          <div class="col-md-6"></div>
          <div class="col-md-3">
            <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-4">
                    <b-icon icon="bell-fill"
                      style="color:white;font-size:1.5rem;vertical-align: middle;padding:0;margin:0;"></b-icon>
                    <sup><span style="color:red;font-size:3rem;position:relative;top:-5px;right:7px;">.</span></sup>
                  </div>
                  <div class="col-md-4">
                    <b-badge variant="light" class="role">Superadmin</b-badge>
                  </div>
                  <div class="col-md-4">
                    <div class="user-initials">CS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-navbar>  
</template>