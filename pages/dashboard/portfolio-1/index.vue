<template>
    <div>
        <DashboardTopMenu />
        <main>
            <header class="dash-header">
                <div class="breadcrumbs">
                    <a href="/dashboard" style="color: #4D6285;font-size:15px;">
                        <b-icon icon="arrow-left"></b-icon> Back
                    </a> <a href="/dashboard" style="color:#919090;font-size: 12px;">Dashboard</a> / <span
                        style="color:#806500;font-size: 12px;">Portfolio 1</span>
                </div>
                <h2>Portfolio 1</h2>
                <p>Setup and manage this portfolio and its members.</p>
            </header>
            <div class="row">
                <div class="col-md-8">
                    <article>
                        <div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="signup-password">
                                        <b-form-group id="input-group-5" label="" label-for="search-portfolio"
                                            class="mt-3">
                                            <b-input-group class="mt-3" id="input-group-5">
                                                <template #prepend>
                                                    <b-input-group-prepend>
                                                        <b-icon icon="search" class="search-prepend"></b-icon>
                                                    </b-input-group-prepend>
                                                </template>
                                                <b-form-input id="search-portfolio" type="text"
                                                    placeholder="Search Portfolio"></b-form-input>
                                            </b-input-group>
                                        </b-form-group>
                                    </div>
                                </div>
                                <div class="col-md-6" style="text-align: right;padding-right:10%;padding-top: 50px;">
                                    <b-button variant="light"><i class="bi bi-folder-fill"></i> Manage Portfolio
                                    </b-button>
                                </div>
                            </div><br/><br/>
                            <h5 style="color:#646364;font-size: 12px;">0 Companies</h5>
                            <b-card border-variant="light" header-bg-variant="transparent"
                                header-html="<div class='row'><div class='col card-header-left'>Company</div><div class='col card-header-left'>Users</div></div>"
                                header-border-variant="light" class="text-center">
                                <b-card-text>
                                    <span style="color: #7A797A;font-size: 14px;">No companies in this portfolio yet, you can add a company to start.</span><br /><br />
                                    <b-button variant="warning" class="btn-lg">
                                        <b-icon icon="building"></b-icon><sup><b-icon icon="plus"></b-icon></sup> Add company
                                    </b-button>
                                </b-card-text>
                            </b-card>
                        </div>
                    </article>
                </div>
                <div class="col-md-4">
                    <aside>
                        <div class="row">
                            <div class="col ml-5" style="padding:10px 0px 0px 50px;">
                                <span style="color: #7A797A;font-size: 12px;">MEMBERS</span>
                            </div>
                            <div class="col text-right">
                                <b-button variant="light" class="btn-lg mr-5">
                                    <b-icon icon="gear"></b-icon> <span style="color: #3E4E6A;font-size: 15px;">Manage</span>
                                </b-button>
                            </div>
                        </div>
                        <b-card border-variant="light" header-bg-variant="transparent"
                            header-html=""
                            header-border-variant="light" class="text-center">
                            <b-card-text>
                                <span style="color: #7A797A;font-size: 14px;">No companies in this portfolio yet, you can add a company to start.</span><br /><br />
                                <b-button variant="warning" class="btn-lg">
                                    <b-icon icon=""></b-icon> Add company
                                </b-button>
                            </b-card-text>
                        </b-card>
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
        <DashboardRenamePortfolioModal />
        <DashboardDeletePortfolioModal />
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