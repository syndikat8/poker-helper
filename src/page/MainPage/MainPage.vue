<template>
    <div class="flex gap-x-5">
        <div
            class="flex flex-col items-center gap-y-1.5"
            v-for="item in items"
            :key="item.id"
        >
            <div class="font-medium text-4.5">
                {{ item.name }}
            </div>

            <List
                :activeAction="activeAction"
                :item="item"
                @updateActiveAction="updateActiveAction"
                @onMouseleave="onMouseleave"
            />
        </div>
    </div>

    <OpenRaiseDialog
        v-if="ACTIONS.OR === activeAction"
        :item="currentItem"
        :popupPosition="popupPosition"
        @onMouseenter="onMouseenter"
    />
</template>

<script setup>
import { ref } from 'vue'

import List from '@/components/List/List.vue'
import OpenRaiseDialog from '@/components/dialogs/OpenRaiseDialog/OpenRaiseDialog.vue'

import { ACTIONS_ITEMS, ACTIONS } from '@/constants/itemsPosition.js'

const items = ref(ACTIONS_ITEMS)
const currentItem = ref({})

const activeAction = ref(-1)

const popupPosition = ref({})

const timeoutId = ref(null)

const updateActiveAction = (id, item = {}, positionElem = {}) => {
    createPopupPosition(positionElem)
    activeAction.value = id
    currentItem.value = item
}

const createPopupPosition = ({ top, left, width }) => {
    clearTimeout(timeoutId.value)

    popupPosition.value = {
        top: `73px`,
        left: `${left + width + 10}px`
    }
}

const onMouseleave = () => {
    timeoutId.value = setTimeout(() => {
        activeAction.value = -1
    }, 200)
}

const onMouseenter = () => {
    clearTimeout(timeoutId.value)
}
</script>
