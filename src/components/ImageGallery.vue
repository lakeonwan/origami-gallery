<template>
  <div class="gallery">
    <div v-for="image in images" :key="image.id" class="image-container">
      <img :src="baseUrl === '/' ? image.thumbUrl : baseUrl + image.thumbUrl" :alt="image.description" />
      <p>{{ image.description }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const images = ref([]);
    const imagesJsonPath = `${process.env.BASE_URL}images.json`;
    const baseUrl = `${process.env.BASE_URL}`;

    // Fetch the image data on component mount
    onMounted(() => {

      fetch(imagesJsonPath)
          .then(response => response.json())
          .then(data => {
            images.value = data;
          });
    });

    return {
      images, baseUrl
    };
  }
};
</script>

<style>
.gallery {
  display: flex;
  flex-wrap: wrap;
}
.image-container {
  margin: 10px;
}
img {
  max-width: 200px;
  border-radius: 10px;
}
</style>
