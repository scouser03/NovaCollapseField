Nova.booting((Vue, router, store) => {
    Vue.component(
        'detail-nova-collapse-field',
        require('./components/DetailField')
    )
    Vue.component('form-nova-collapse-field', require('./components/FormField'))
})
