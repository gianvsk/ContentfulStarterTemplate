<script setup lang="ts">

type TitleParagraphProps = {
    title: string,
    paragraph: string
    isSmall?: boolean
}

const {title, paragraph, isSmall} = defineProps<TitleParagraphProps>()

</script>

<template>
    <div :class="[isSmall ? 'pt-0' : 'pt-8']">
        <h5 :class="[isSmall ? 'mt-2 text-xl' : 'mb-4 text-xs', ' text-gray-800 font-urbanist font-semibold lg:text-4xl']">{{ title }}</h5>
        <p :class="[isSmall? 'mt-2' : 'mt-0' , 'mt- text-sm font-urbanist font-regular text-gray-600 max-w-4xl']">{{ paragraph }}</p>
    </div>
</template>