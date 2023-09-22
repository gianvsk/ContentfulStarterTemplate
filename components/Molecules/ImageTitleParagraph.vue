<script setup lang="ts">

type ImageTitleParagraphProps = {
    title: string,
    image: string,
    paragraph: string
}

const {title, image, paragraph} = defineProps<ImageTitleParagraphProps>()

</script>

<template>
    <div class="flex flex-col">    
        <AtomsImageTitle :title="title" :image="image"/>
        <p class=" my-5 font-urbanist font-normal">{{ paragraph }}</p>
    </div>
</template>