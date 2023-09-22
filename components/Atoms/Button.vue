<script setup lang="ts">

type ButtonProps = {
    text: string
}

const { text } = defineProps<ButtonProps>()

</script>

<template>
    <UButton :ui="{rounded: 'rounded-full', font:'font-semibold'}" class="px-6 py-2 text-gray-800 font-urbanist bg-yellow-custom" >
       {{ text }}
    </UButton> 
</template>