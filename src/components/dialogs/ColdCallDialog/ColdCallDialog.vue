<template>
    <WrapperDialog
        :popupPosition="popupPosition"
        @onMouseenter="onMouseenter"
        @onMouseleave="onMouseleave"
    >
        <FlopZilla
            class="mb-5"
            :item="item"
        />

        <RulesList :rules="rules"/>
    </WrapperDialog>
</template>

<script setup>
import { computed } from 'vue'

import WrapperDialog from '@/components/dialogs/WrapperDialog/WrapperDialog.vue'
import FlopZilla from '@/components/FlopZilla/FlopZilla.vue'
import RulesList from '@/components/List/RulesList.vue'

import { RULES_COLD_CALL } from '@/constants/rules/rules.js'

const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    },
    popupPosition: {
        type: Object,
        default: () => ({})
    }
})

const emits = defineEmits(['onMouseenter', 'onMouseleave'])

const rules = computed(() => RULES_COLD_CALL(props.item.id))

const onMouseenter = () => {
    emits('onMouseenter')
}

const onMouseleave = () => {
    emits('onMouseleave')
}
</script>
