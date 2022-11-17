<template>
    <b-modal id="manage-portfolio-modal" ok-variant="warning" ok-title="Save" size="lg"
        title-html="<h5 class='modal-title'>Manage Portfolio</h5><p class='modal-subtitle'>Add and remove companies from this portfolio.</p>">
        <b-card class="mt-3">
            <div class="row">
                <div class="col-md-9">
                    <h5 style="text-transform: uppercase;">Portfolio</h5>
                    <p>Portfolio 1</p>
                </div>
                <div class="col-md-3">
                </div>
            </div>
        </b-card>
        <b-card-group deck class="mt-3 custom-card">
            <b-card title="" header-tag="header" footer-tag="" header-text-variant="white">
                <template #header>
                    <div class="row">
                        <div class="col">
                            <div class="mt-2">Portfolio <b-badge variant="warning">5</b-badge></div>
                        </div>
                        <div class="col">
                            <div class="signup-password">
                                <b-form-input id="search" type="text" placeholder="Search to add">
                                </b-form-input>
                            </div>
                        </div>
                    </div>
                </template>
                <b-table-simple caption-top responsive>
                    <b-tbody>
                        <b-tr>
                            <b-td><img src="~/assets/dashboard/images/sunbeam_logo.png" alt="Logo of Sunbeam"/> Sunbeam Product Studio</b-td>
                            <b-td class="second-column">Remove</b-td>
                        </b-tr>
                        <b-tr>
                            <b-td><img src="~/assets/dashboard/images/access_logo.png" alt="Logo of Access Bank"/> Access Bank</b-td>
                            <b-td class="second-column">Remove</b-td>
                        </b-tr>
                        <b-tr>
                            <b-td><img src="~/assets/dashboard/images/logo_frame.png" alt="Empty Logo"/> Dangote Cement</b-td>
                            <b-td class="second-column">Remove</b-td>
                        </b-tr>
                        <b-tr>
                            <b-td><img src="~/assets/dashboard/images/logo_frame.png" alt="Empty Logo"/> Leadway Insurance</b-td>
                            <b-td class="second-column">Remove</b-td>
                        </b-tr>
                        <b-tr>
                            <b-td><img src="~/assets/dashboard/images/logo_frame.png" alt="Empty Logo"/> Nestle Group</b-td>
                            <b-td class="second-column">Remove</b-td>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>
            </b-card>
        </b-card-group>
    </b-modal>
</template>