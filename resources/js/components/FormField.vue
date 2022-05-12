<template> </template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'
import { overridePanel } from '../utl/override.js'
export default {
    mixins: [FormField, HandlesValidationErrors],
    props: ['resourceName', 'resourceId', 'field'],

    mounted() {
        overridePanel(this.field.name)
    },
    methods: {
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {},
        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {},
        /**
         * Update the field's internal value.
         */
        handleChange(value) {},
    },
}
</script>
