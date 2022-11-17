export { default as BootstrapVue } from '../../components/bootstrap-vue.js'
export { default as DashboardDeletePortfolioModal } from '../../components/Dashboard/DeletePortfolioModal.vue'
export { default as DashboardManageMembersModal } from '../../components/Dashboard/ManageMembersModal.vue'
export { default as DashboardManagePortfolioModal } from '../../components/Dashboard/ManagePortfolioModal.vue'
export { default as DashboardRenamePortfolioModal } from '../../components/Dashboard/RenamePortfolioModal.vue'
export { default as DashboardTopMenu } from '../../components/Dashboard/TopMenu.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
