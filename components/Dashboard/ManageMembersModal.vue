<template>
    <b-modal id="manage-members-modal" ok-variant="warning" ok-title="Save" size="lg"
        title-html="<h5 class='modal-title'>Manage Members</h5><p class='modal-subtitle'>Add and remove members from this portfolio.</p>">
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
                            <div class="mt-2">Portfolio Admin</div>
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
                            <b-td><img src="~/assets/dashboard/images/adejumo.png" alt="Image of Admin"/> Mariam Adejumo</b-td>
                            <b-td class="second-column">Remove</b-td>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>
            </b-card>
        </b-card-group>
        <b-card-group deck class="mt-3 custom-card">
            <b-card title="" header-tag="header" footer-tag="" header-text-variant="white">
                <template #header>
                    <div class="row">
                        <div class="col">
                            <div class="mt-2">Members</div>
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
                            <b-td><img src="~/assets/dashboard/images/okoro.png" alt="Image of Initials"/> Ifeoma Okoro</b-td>
                            <b-td class="second-column">Remove</b-td>
                        </b-tr>
                        <b-tr>
                            <b-td><img src="~/assets/dashboard/images/grace.png" alt="Image of Initials"/> Vivien Grace</b-td>
                            <b-td class="second-column">Remove</b-td>
                        </b-tr>
                        <b-tr>
                            <b-td><img src="~/assets/dashboard/images/ademola.png" alt="Image of Initials"/> Ademola-Popoola Aanuoluwa T...</b-td>
                            <b-td class="second-column">Remove</b-td>
                        </b-tr>
                        <b-tr>
                            <b-td><img src="~/assets/dashboard/images/johnson.png" alt="Image of Initials"/> Ikechukwu Johnson</b-td>
                            <b-td class="second-column">Remove</b-td>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>
            </b-card>
        </b-card-group>
    </b-modal>
</template>