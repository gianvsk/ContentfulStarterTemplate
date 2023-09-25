<script setup lang="ts">

type CardProps = {
    data: any
}

const { data } = defineProps<CardProps>()

</script>

<template>
    <NuxtLink :to="'/post-' + data.id" class="w-full h-full">
        <UCard :ui="{ rounded: 'rounded-2xl', background: 'bg-white', base: 'overflow-auto' , body: { padding: 'p-0 sm:px-0 h-full' }, header: { padding: 'p-0 sm:px-0' }, footer: { padding: 'px-0 py-0 sm:px-0'} }"
            class="h-full w-full flex flex-col drop-shadow-none border border-gray-300 rounded-2xl overflow-hidden shadow-lg">
            <template #header>
                <img :src="data.images.url" class="w-full h-auto" />
            </template>
            <div class="px-4 py-3 flex flex-col h-full sm:py-0">
                <h3 class=" text-base text-gray-800 font-urbanist font-semibold mb-3 md:text-lg">
                    {{ data.title }}
                </h3>
                <MoleculesIconTextDate :name="data.author.name" :picture="data.author.picture.url" :date="useDate(data.date)" />
            </div>
        </UCard>
    </NuxtLink>
</template>