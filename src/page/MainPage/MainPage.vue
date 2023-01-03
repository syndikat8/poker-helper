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

            <List :items="item.positions" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import List from '@/components/List/List.vue'

import { itemsPosition } from '@/constants/itemsPosition.js'

const items = ref(itemsPosition)
</script>
