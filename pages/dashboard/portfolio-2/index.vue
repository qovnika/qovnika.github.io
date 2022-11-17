<template>
    <div>
        <DashboardTopMenu />
        <main>
            <header class="dash-header">
                <div class="breadcrumbs">
                    <a href="/dashboard" style="color: #4D6285;font-size:15px;">
                        <b-icon icon="arrow-left"></b-icon> Back
                    </a> <a href="/dashboard" style="color:#919090;font-size: 12px;">Dashboard</a> / <span
                        style="color:#806500;font-size: 12px;">Portfolio 2</span>
                </div>
                <div class="row">
                    <div class="col-md-11">
                        <h2>Portfolio 2</h2>
                        <p>Setup and manage this portfolio and its members.</p>
                    </div>
                    <div class="col-md-1 text-right">
                        <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret>
                            <template #button-content>
                                <b-icon icon="three-dots-vertical" style="color:black;">
                                </b-icon>
                            </template>
                            <b-dropdown-item href="#" @click="$bvModal.show('rename-portfolio-modal')">
                                <b-icon icon="folder-check"></b-icon> Open Suite
                            </b-dropdown-item>
                            <b-dropdown-item href="#" @click="$bvModal.show('manage-portfolio-modal')">
                                <b-icon icon="folder-symlink-fill"></b-icon> Move To
                            </b-dropdown-item>
                            <b-dropdown-item href="#" @click="$bvModal.show('manage-members-modal')">
                                <b-icon icon="slash-circle"></b-icon> Deactivate
                            </b-dropdown-item>
                        </b-dropdown>

                    </div>
                </div>
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
                            </div><br /><br />
                            <h5 style="color:#646364;font-size: 12px;">5 Companies</h5>
                            <b-card border-variant="light" header-bg-variant="transparent"
                                header-html="<div class='row'><div class='col card-header-left'>Company</div><div class='col card-header-left'>Portfolio Users</div></div>"
                                header-border-variant="light" class="text-center portfolio-card">
                                <b-card-text>
                                    <b-table-simple responsive>
                                        <b-tbody>
                                            <b-tr>
                                                <b-td class="text-left" style="text-align:left;">
                                                    <img src="~/assets/dashboard/images/sunbeam_logo.png"
                                                        alt="Logo of Sunbeam" /> Sunbeam Product Studio
                                                </b-td>
                                                <b-td class="text-left">12</b-td>
                                                <b-td class="text-right">
                                                </b-td>
                                                <b-td class="text-right">
                                                    <b-dropdown variant="link" toggle-class="text-decoration-none"
                                                        no-caret>
                                                        <template #button-content>
                                                            <b-icon icon="three-dots-vertical" style="color:black;">
                                                            </b-icon>
                                                        </template>
                                                        <b-dropdown-item href="#"
                                                            @click="$bvModal.show('rename-portfolio-modal')">
                                                            <b-icon icon="check-lg"></b-icon> Reactivate
                                                        </b-dropdown-item>
                                                        <b-dropdown-item href="#"
                                                            @click="$bvModal.show('manage-portfolio-modal')">
                                                            <b-icon icon="folder-fill"></b-icon> Move To
                                                        </b-dropdown-item>
                                                        <b-dropdown-item href="#"
                                                            @click="$bvModal.show('manage-members-modal')">
                                                            <b-icon icon="archive-fill"></b-icon> Archive
                                                        </b-dropdown-item>
                                                    </b-dropdown>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-td class="text-left" style="text-align:left;">
                                                    <img src="~/assets/dashboard/images/access_logo.png"
                                                        alt="Logo of Sunbeam" /> Access Bank
                                                </b-td>
                                                <b-td class="text-left">21</b-td>
                                                <b-td class="text-right">
                                                </b-td>
                                                <b-td class="text-right">
                                                    <b-dropdown variant="link" toggle-class="text-decoration-none"
                                                        no-caret>
                                                        <template #button-content>
                                                            <b-icon icon="three-dots-vertical" style="color:black;">
                                                            </b-icon>
                                                        </template>
                                                        <b-dropdown-item href="#"
                                                            @click="$bvModal.show('rename-portfolio-modal')">
                                                            <b-icon icon="check-lg"></b-icon> Reactivate
                                                        </b-dropdown-item>
                                                        <b-dropdown-item href="#"
                                                            @click="$bvModal.show('manage-portfolio-modal')">
                                                            <b-icon icon="folder-fill"></b-icon> Move To
                                                        </b-dropdown-item>
                                                        <b-dropdown-item href="#"
                                                            @click="$bvModal.show('manage-members-modal')">
                                                            <b-icon icon="archive-fill"></b-icon> Archive
                                                        </b-dropdown-item>
                                                    </b-dropdown>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-td class="text-left" style="text-align:left;">
                                                    <img src="~/assets/dashboard/images/logo_frame.png"
                                                        alt="Logo of General" /> Dangote Cement
                                                </b-td>
                                                <b-td class="text-left">23</b-td>
                                                <b-td class="text-right">
                                                    <b-icon icon="slash-circle"></b-icon>
                                                </b-td>
                                                <b-td class="text-right">
                                                    <b-dropdown variant="link" toggle-class="text-decoration-none"
                                                        no-caret>
                                                        <template #button-content>
                                                            <b-icon icon="three-dots-vertical" style="color:black;">
                                                            </b-icon>
                                                        </template>
                                                        <b-dropdown-item href="#"
                                                            @click="$bvModal.show('rename-portfolio-modal')">
                                                            <b-icon icon="check-lg"></b-icon> Reactivate
                                                        </b-dropdown-item>
                                                        <b-dropdown-item href="#"
                                                            @click="$bvModal.show('manage-portfolio-modal')">
                                                            <b-icon icon="folder-fill"></b-icon> Move To
                                                        </b-dropdown-item>
                                                        <b-dropdown-item href="#"
                                                            @click="$bvModal.show('manage-members-modal')">
                                                            <b-icon icon="archive-fill"></b-icon> Archive
                                                        </b-dropdown-item>
                                                    </b-dropdown>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-td class="text-left" style="text-align:left;">
                                                    <img src="~/assets/dashboard/images/logo_frame.png"
                                                        alt="Logo of Sunbeam" /> Leadway Insurance
                                                </b-td>
                                                <b-td class="text-left">32</b-td>
                                                <b-td class="text-right">
                                                </b-td>
                                                <b-td class="text-right">
                                                    <b-dropdown variant="link" toggle-class="text-decoration-none"
                                                        no-caret>
                                                        <template #button-content>
                                                            <b-icon icon="three-dots-vertical" style="color:black;">
                                                            </b-icon>
                                                        </template>
                                                        <b-dropdown-item href="#"
                                                            @click="$bvModal.show('rename-portfolio-modal')">
                                                            <b-icon icon="check-lg"></b-icon> Reactivate
                                                        </b-dropdown-item>
                                                        <b-dropdown-item href="#"
                                                            @click="$bvModal.show('manage-portfolio-modal')">
                                                            <b-icon icon="folder-fill"></b-icon> Move To
                                                        </b-dropdown-item>
                                                        <b-dropdown-item href="#"
                                                            @click="$bvModal.show('manage-members-modal')">
                                                            <b-icon icon="archive-fill"></b-icon> Archive
                                                        </b-dropdown-item>
                                                    </b-dropdown>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-td class="text-left" style="text-align:left;">
                                                    <img src="~/assets/dashboard/images/logo_frame.png"
                                                        alt="Logo of Sunbeam" /> Nestle Group
                                                </b-td>
                                                <b-td class="text-left">14</b-td>
                                                <b-td class="text-right">
                                                </b-td>
                                                <b-td class="text-right">
                                                    <b-dropdown variant="link" toggle-class="text-decoration-none"
                                                        no-caret>
                                                        <template #button-content>
                                                            <b-icon icon="three-dots-vertical" style="color:black;">
                                                            </b-icon>
                                                        </template>
                                                        <b-dropdown-item href="#"
                                                            @click="$bvModal.show('rename-portfolio-modal')">
                                                            <b-icon icon="check-lg"></b-icon> Reactivate
                                                        </b-dropdown-item>
                                                        <b-dropdown-item href="#"
                                                            @click="$bvModal.show('manage-portfolio-modal')">
                                                            <b-icon icon="folder-fill"></b-icon> Move To
                                                        </b-dropdown-item>
                                                        <b-dropdown-item href="#"
                                                            @click="$bvModal.show('manage-members-modal')">
                                                            <b-icon icon="archive-fill"></b-icon> Archive
                                                        </b-dropdown-item>
                                                    </b-dropdown>
                                                </b-td>
                                            </b-tr>
                                        </b-tbody>
                                    </b-table-simple>
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
                                    <b-icon icon="gear"></b-icon> <span
                                        style="color: #3E4E6A;font-size: 15px;">Manage</span>
                                </b-button>
                            </div>
                        </div>
                        <b-card border-variant="light" header-bg-variant="transparent" header-html=""
                            header-border-variant="light" class="text-center members-card">
                            <b-card-text>
                                <b-table-simple responsive>
                                    <b-tbody>
                                        <b-tr>
                                            <b-td class="text-right">
                                                <div class="user-initials"
                                                    style="display: inline-block;padding: 2% 0;background: #4DAB8C;">
                                                    MA</div>
                                            </b-td>
                                            <b-td class="text-left">
                                                <span style="color: #383637;font-size:14px;">Mariam Adejumo</span>
                                            </b-td>
                                            <b-td class="text-right">
                                                <p style="margin-right: 20px;color: #3E4E6A;font-size:14px;">Admin</p>
                                            </b-td>
                                        </b-tr>
                                        <b-tr>
                                            <b-td class="text-right">
                                                <div class="user-initials"
                                                    style="display: inline-block;padding: 2% 0;background: #806500;">
                                                    AK</div>
                                            </b-td>
                                            <b-td class="text-left">
                                                <span style="color: #383637;font-size:14px;">Abdulazeez Kazeem</span>
                                            </b-td>
                                            <b-td class="text-right">
                                                <p style="margin-right: 20px;color: #3E4E6A;font-size:14px;"></p>
                                            </b-td>
                                        </b-tr>
                                        <b-tr>
                                            <b-td class="text-right">
                                                <div class="user-initials"
                                                    style="display: inline-block;padding: 2% 0;background: #7A797A;">
                                                    TA</div>
                                            </b-td>
                                            <b-td class="text-left">
                                                <span style="color: #383637;font-size:14px;">Tolulope Ajibade</span>
                                            </b-td>
                                            <b-td class="text-right">
                                                <p style="margin-right: 20px;color: #3E4E6A;font-size:14px;"></p>
                                            </b-td>
                                        </b-tr>
                                        <b-tr>
                                            <b-td class="text-right">
                                                <div class="user-initials with-image"
                                                    style="display: inline-block;padding: 2% 0;background: white;">
                                                    <img src="~/assets/dashboard/images/obuneye.png"
                                                        alt="Image of member" />
                                                </div>
                                            </b-td>
                                            <b-td class="text-left">
                                                <span style="color: #383637;font-size:14px;">Emmanuel Obuneye</span>
                                            </b-td>
                                            <b-td class="text-right">
                                                <p style="margin-right: 20px;color: #3E4E6A;font-size:14px;"></p>
                                            </b-td>
                                        </b-tr>
                                        <b-tr>
                                            <b-td class="text-right">
                                                <div class="user-initials"
                                                    style="display: inline-block;padding: 2% 0;background: #E99E8B;">
                                                    OE</div>
                                            </b-td>
                                            <b-td class="text-left">
                                                <span style="color: #383637;font-size:14px;">Ogechukwu Eze</span>
                                            </b-td>
                                            <b-td class="text-right">
                                                <p style="margin-right: 20px;color: #3E4E6A;font-size:14px;"></p>
                                            </b-td>
                                        </b-tr>
                                    </b-tbody>
                                </b-table-simple>
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