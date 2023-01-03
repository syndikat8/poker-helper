<template>
    <div class="flex w-max rounded-1.25 border-1">
        <div
            class="px-2.5 py-1 border-r-1 last:border-r-0 cursor-pointer hover:bg-indigo-500"
            :class="[tab.id === activeTab && 'bg-indigo-500']"
            v-for="tab in tabs"
            :key="tab.id"
            @click="onChangeTab(tab)"
        >
            {{ tab.name }}
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    items: {
        type: Array,
        default: () => ([])
    },
    activeTab: {
        type: Number,
        default: 0
    }
})

const emits = defineEmits(['update:items', 'onChangeTab'])

const tabs = computed({
    get () {
        return props.items
    },
    set (data) {
        emits('update:items', data)
    }
})

const onChangeTab = (tab) => {
    emits('onChangeTab', tab)
}

</script>