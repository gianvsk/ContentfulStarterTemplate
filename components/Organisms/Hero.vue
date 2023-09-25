<script setup lang="ts">

type HeroProps = {
    data: any
    reverse?: boolean
}

const { data, reverse } = defineProps<HeroProps>()

</script>

<template>
    <NuxtLink :to="'/post-' + data.id" :class="reverse ? 'cursor-auto' : ''">
        <div :class="[' h-auto flex flex-col justify-start drop-shadow-none border border-gray-300 rounded-2xl overflow-hidden shadow-lg lg:items-center lg:h-560px',
                        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row']">

            <img :src="data.images.url" class="w-full h-full object-cover lg:w-1/2" />
            <div class="block relative h-full py-6 px-4 lg:px-16 lg:py-12 lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
                <UBadge 
                    label="Featured" 
                    color="sky" 
                    variant="soft" 
                    size="md"
                    :class="['absolute font-urbanist', reverse ? 'top-28 left-16' : ' top-28 left-16']" />

                <MoleculesIconTextDate :name="data.author.name" :picture="data.author.picture.url" />
                <MoleculesTitleParagraph :title="data.title" :paragraph="data.text" :isSmall="true" />
                <MoleculesIconTextDate :date="useDate(data.date)" />
            </div>
            
        </div>
    </NuxtLink>
</template>