<script setup lang="ts">
import {SectionData} from '../../types/types'

    type SectionPageProps = {
        data: any
    }

    const {data} = defineProps<SectionPageProps>()

    const dataSection : SectionData = data

</script>

<template>

    <article class="flex flex-col items-center gap-5 mt-8">
        <p class="font-urbanist font-normal">{{ dataSection.items[0].paragraph }}</p>
        <MoleculesImageTitleParagraph 
            :title="dataSection.items[0].articlesCollection.items[0].tItle" 
            :image="dataSection.items[0].articlesCollection.items[0].image.url" 
            :paragraph="dataSection.items[0].articlesCollection.items[0].text"
            />
            <MoleculesImageTitleParagraph 
            :title="dataSection.items[0].articlesCollection.items[1].tItle" 
            :image="dataSection.items[0].articlesCollection.items[1].image.url" 
            :paragraph="dataSection.items[0].articlesCollection.items[1].text"
            />
    </article>
    <img class="object-cover w-full md:w-97vw max-w-none" :src="dataSection.items[0].image.url"/>

</template>