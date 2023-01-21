<template>
    <WrapperDialog
        :popupPosition="popupPosition"
        @onMouseenter="onMouseenter"
        @onMouseleave="onMouseleave"
    >
        <FlopZilla
            class="mb-5"
            :item="item"
            :cards="CARDS_3BET"
        />

        <RulesList :rules="rules"/>
    </WrapperDialog>
</template>

<script setup>
import { reactive } from 'vue'

import WrapperDialog from '@/components/dialogs/WrapperDialog/WrapperDialog.vue'
import FlopZilla from '@/components/FlopZilla/FlopZilla.vue'
import RulesList from '@/components/List/RulesList.vue'

import { CARDS_3BET } from '@/constants/cards.js'

defineProps({
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

const rules = reactive([
    { name: 'Всегда против CO и BTN и если EP +17 и MP +19', styleClass: 'bg-green' },
    { name: 'Только против CO и BTN', styleClass: 'bg-indigo-300' },
])

const onMouseenter = () => {
    emits('onMouseenter')
}

const onMouseleave = () => {
    emits('onMouseleave')
}
</script>
