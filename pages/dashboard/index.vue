<template>
  <div>
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
                  <b-icon icon="dot"
                    style="color:red;font-size:larger;position:absolute;top:5px;right:205px;display:flex;"></b-icon>
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

    <main>
      <header>
        <h2>Enterprise Dashboard</h2>
        <p>Setup and manage portfolios, their admins and their respective portfolio companies.</p>
      </header>
      <div class="row">
        <div class="col-md-9" style="padding-right:0;">
          <article>
            <div>
              <b-tabs content-class="mt-3">
                <b-tab title="Enterprise Portfolio" active>
                  <div class="row">
                    <div class="col-md-6">
                      <h2 style="color:#232123;">1 Portfolio</h2>
                    </div>
                    <div class="col-md-6" style="text-align: right;padding-right:10%;">
                      <b-button variant="light"><i class="bi bi-folder-fill"></i> Create Portfolio</b-button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <section class="dash">
                        <div class="row">
                          <div class="col">
                            <span class="dash-head">PORTFOLIO 1</span>
                          </div>
                          <div class="col" style="text-align: right;">
                            <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
                              <template #button-content>
                                <b-icon icon="three-dots-vertical" style="color:black;"></b-icon>
                              </template>
                              <b-dropdown-item href="#">Action</b-dropdown-item>
                              <b-dropdown-item href="#">Another action</b-dropdown-item>
                              <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                            </b-dropdown>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col second-dash-area">
                            <h2>0</h2>
                            <a href="#"><span style="color:#806500;">
                                <b-icon icon="building"></b-icon>
                              </span> <span style="color:grey;">Companies</span></a>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="mt-4">
                              <i style="color: #7A797A;">No portfolio admin</i>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div class="col"></div>
                  </div>
                </b-tab>
                <b-tab title="Portfolio Companies">
                  <p>I'm the second tab</p>
                </b-tab>
              </b-tabs>
            </div>
          </article>
        </div>
        <div class="col-md-3" style="padding-left:0;">
          <aside>
            <div class="aside-top">
              <div class="row">
                <div class="col-md-9" style="padding: 5% 8%;">
                  <h4 style="font-size: 12px;">CHECKLIST</h4>
                  <p style="color: #997900;font-size: 14px;">Finish setting up your enterprise</p>
                  <b-form-group label="" v-slot="{ ariaDescribedby }">
                    <b-form-checkbox-group id="checkbox-group-2" v-model="selected" :aria-describedby="ariaDescribedby"
                      name="checklist" class="aside-form">
                      <b-form-checkbox value="Add other enterprise users">
                        &nbsp;Add other enterprise users</b-form-checkbox>
                      <b-form-checkbox value="Add portfolio companies">
                        &nbsp;Add portfolio companies</b-form-checkbox>
                    </b-form-checkbox-group>
                  </b-form-group>
                </div>
                <div class="col-md-3" style="padding: 0% 0;margin:auto;">
                  <div class="ellipse text-center">
                    <span style="font-size: 14px;color:#383637;">0/2</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="aside-middle" style="padding: 5% 8%;">
              <div>
                <h4 style="font-size: 12px;color:#7A797A;">ENTERPRISE OWNER</h4>
                <p style="color: #232123;font-size:15px;">Alsec Nominees Limited</p>
              </div>
              <div class="mt-3">
                <h4 style="font-size: 12px;color:#7A797A;">ENTERPRISE ADMIN</h4>
                <div class="user-initials" style="display: inline-block;padding: 2% 0;">OE</div> <span
                  style="color: #232123;font-size:15px;">Oyindamola Ehiwere</span>
              </div>
              <div class="mt-3">
                <h4 style="font-size: 12px;color:#7A797A;">PORTFOLIO COMPANIES</h4>
                <p style="color: #232123;font-size:15px;">0</p>
              </div>
              <div class="mt-3">
                <h4 style="font-size: 12px;color:#7A797A;">USERS</h4>
                <div class="row">
                  <div class="col">
                    <p style="color: #646364;font-size:15px;">0 (Enterprise)</p>
                  </div>
                  <div class="col">
                    <p style="color: #646364;font-size:15px;">0 (Portfolio)</p>
                  </div>
                </div>
              </div>
              <a href="#" style="color: #3E4E6A;text-decoration:none;">
                <b-icon icon="gear-fill"></b-icon> Manage Enterprise
              </a>
            </div>
            <div class="row">
              <div class="col" style="padding: 3% 8% 0 8%;">
                <h6 style="color: #7A797A;font-size: 12px;">UP NEXT</h6>
              </div>
            </div>
            <div class="row">
              <div class="col text-center" style="color: #7A797A;font-size:14px;padding: 5% 0;">
                No activity yet.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
    <b-modal id="loader-modal" title="" centered busy hide-backdrop>
      <div class="d-flex justify-content-center">
        <div class="spinner-border text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' }
        ]
      }
    }
  }
</script>

<style>
@import url("./app-local.css")
</style>