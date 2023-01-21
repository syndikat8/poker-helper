<template>
    <div class="grid gap-y-2">
        <div
            class="flex items-center gap-x-1 text-3.5"
            v-for="rule in rules"
            :key="rule.name"
        >
            <div
                class="w-5 h-5"
                :class="rule.styleClass"
            />

            {{ rule.name }}
        </div>
    </div>
</template>

<script setup>

defineProps({
    rules: {
        type: Array,
        default: () => []
    }
})

</script>