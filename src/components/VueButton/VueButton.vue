<template>
    <button @click="toggle">{{ label }}</button>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const isOn = ref(false)
        const label = computed(() => `Vue Button ${isOn.value ? 'On' : 'Off'}`)
        const toggle = () => (isOn.value = !isOn.value)
        return { label, toggle }
    },
})
</script>

<style scoped>
button {
    padding: 0.5rem 1rem;
    border: solid 1px slategray;
    border-radius: 9999px;
}

button:hover {
    background-color: lightgreen;
}
</style>
