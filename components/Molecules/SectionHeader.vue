<script setup lang="ts">

    type SectionHeaderProps = {
        title: string
    }

    const {title} = defineProps<SectionHeaderProps>()

</script>

<template>
    <div class="w-full py-5 flex justify-between items-center ">
        <h2 class=" text-4xl text-gray-800 font-urbanist font-semibold">{{ title }}</h2>
        <UIcon name="i-heroicons-globe-alt"/>
    </div>
</template>