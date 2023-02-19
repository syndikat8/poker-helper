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

    <component
        :is="getComponent"
        :item="currentItem"
        :popupPosition="popupPosition"
        @onMouseenter="onMouseenter"
        @onMouseleave="onMouseleave"
    />
</template>

<script setup>
import { computed, ref } from 'vue'

import List from '@/components/List/List.vue'

import { ACTIONS_ITEMS } from '@/constants/position/itemsPosition.js'
import { GET_COMPONENT } from '@/constants/getComponent.js'

const items = ref(ACTIONS_ITEMS)
const currentItem = ref({})

const activeAction = ref(-1)

const popupPosition = ref({})

const timeoutId = ref(null)

const getComponent = computed(() => GET_COMPONENT(activeAction.value))

const updateActiveAction = (id, item = {}, positionElem = {}) => {
    createPopupPosition(positionElem)
    activeAction.value = id
    currentItem.value = item
}

const createPopupPosition = ({ left, width }) => {
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
