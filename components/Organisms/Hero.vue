<script setup lang="ts">

type HeroProps = {
    data: any
    reverse?: boolean
    title?: string
}

const { data,title,reverse } = defineProps<HeroProps>()

</script>

<template>
    <NuxtLink :to="'/post-' + data.id" :class="reverse? 'cursor-auto' : ''">
        <UCard :ui="{ rounded: 'rounded-2xl', background: 'bg-white', body: { padding: 'p-0 sm:px-0 sm:p-0', base: 'lg:h-full lg:w-1/2' }, header: { padding: 'p-0 sm:px-0', base: 'lg:w-1/2' } }"
                :class="['h-auto w-full flex flex-col drop-shadow-none border border-gray-300 rounded-2xl overflow-hidden shadow-lg lg:items-center',
                        reverse? 'lg:flex-row-reverse': 'lg:flex-row' ]">
            <template #header>
                <img :src="data.images.url" class="w-full h-full"/>
            </template>
            <div class="block lg:flex lg:items-center lg:justify-center lg:h-full lg:w-full lg:px-16 lg:py-12">
                <div class="py-6 px-4 lg:py-0 lg:px-0 lg:flex lg:flex-col lg:justify-center">
                    <MoleculesIconTextDate :name="data.author.name" :picture="data.author.picture.url"/>
                    <MoleculesTitleParagraph :title="data.title" :paragraph="reverse? data.text : ''" :isSmall="true"/>
                    <MoleculesIconTextDate :date="useDate(data.date)" />
                </div>
            </div>
        </UCard>
    </NuxtLink>
</template>