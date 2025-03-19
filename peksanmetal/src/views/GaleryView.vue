<template>
  <v-app>
    <v-container fluid>
      <h2 class="text-center font-weight-bold my-10">Ürün Galerimiz</h2>
      <v-row>
        <v-col
          v-for="(item, index) in products"
          :key="index"
          cols="12"
          sm="6"
          md="3"
        >
          <v-card class="gallery-card" outlined @click="openDialog(item.image)">
            <v-img
              :src="item.image"
              class="gallery-image"
              alt="Image"
              cover
            ></v-img>
          </v-card>
        </v-col>
      </v-row>

      <!-- Image Dialog -->
      <v-dialog v-model="dialog" max-width="600">
        <v-card>
          <v-img :src="selectedImage" class="dialog-image" contain></v-img>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      selectedImage: null,
      products: [
        { image: "/images/fotograf1.jpg" },
        { image: "/images/fotograf2.jpg" },
        { image: "/images/fotograf3.jpg" },
        { image: "/images/fotograf4.jpg" },
        { image: "/images/fotograf5.jpg" },
        { image: "/images/fotograf6.jpg" },
        { image: "/images/fotograf7.jpg" },
        { image: "/images/fotograf8.jpg" },
        { image: "/images/fotograf9.jpg" },
        { image: "/images/fotograf10.jpg" },
        { image: "/images/fotograf11.jpg" },
        { image: "/images/fotograf12.jpg" },
        { image: "/images/fotograf13.jpg" },
        { image: "/images/foto14.jpg" },
        { image: "/images/foto15.jpg" },
        { image: "/images/foto16.jpg" },
        { image: "/images/foto17.jpg" },
        { image: "/images/foto18.jpg" },
        { image: "/images/foto19.jpg" },
        { image: "/images/foto20.jpg" }
      ],
    };
  },
  methods: {
    openDialog(image) {
      this.selectedImage = image;
      this.dialog = true;
    },
  },
};
</script>

<style scoped>
.gallery-card {
  background-color: #000000b0;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}

.gallery-card:hover {
  transform: scale(1.05);
}

.gallery-image {
  height: 220px;
}

.dialog-image {
  width: 100%;
  max-height: 80vh;
}
</style>
