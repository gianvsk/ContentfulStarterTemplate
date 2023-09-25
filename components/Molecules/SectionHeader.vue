<script setup lang="ts">

type SectionHeaderProps = {
    title: string
}

const { title } = defineProps<SectionHeaderProps>()

</script>

<template>
    <div class="w-full py-5 flex justify-between items-center ">
        <h2 class=" text-4xl text-gray-800 font-urbanist font-semibold">{{ title }}</h2>
        <div class="flex items-center gap-1">
            <UIcon name="i-heroicons-globe-alt" class=" mt-1"/>
            <select class="w-20" value="EN">
                <option value="EN" class="text-black font-urbanist font-normal">EN</option>
                <option value="Deutsch" class="text-black font-urbanist font-normal">Deutsch</option>
            </select>
        </div>
    </div>
</template>