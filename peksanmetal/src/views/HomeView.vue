<script setup>
import { ref } from 'vue';
import TheWelcome from '../components/TheWelcome.vue';

</script>

<template>
  <v-container fluid class="pa-0 ma-0">
    <v-carousel hide-delimiters>
      <v-carousel-item src="/public/images/fotograf1.jpg" cover>
        <div class="overlay">
        <v-card class="card-overlay" dark>
          <v-card-text>
            <h2 class="title">PİRİNÇ BRONZ SANATI</h2>
            <p class="description">
              İsteğe bağlı her sipariş alınır
            </p>
            <v-btn color="white" variant="outlined" append-icon="mdi-phone">İletisime gecin</v-btn>
          </v-card-text>
        </v-card>
      </div>
      </v-carousel-item>

      <v-carousel-item src="/public/images/fotograf11.jpg" cover>
        <div class="overlay">
        <v-card class="card-overlay" dark>
          <v-card-text>
            <h2 class="title">PİRİNÇ BRONZ SANATI</h2>
            <p class="description">
              İsteğe bağlı her sipariş alınır
            </p>
            <v-btn color="white" variant="outlined" append-icon="mdi-phone">Iletisime gecin</v-btn>
          </v-card-text>
        </v-card>
      </div>
      </v-carousel-item>

      <v-carousel-item src="/public/images/foto20.jpg" cover>
        <div class="overlay">
        <v-card class="card-overlay" dark>
          <v-card-text>
            <h2 class="title">PİRİNÇ BRONZ SANATI</h2>
            <p class="description">
              İsteğe bağlı her sipariş alınır
            </p>
            <v-btn color="white" variant="outlined" append-icon="mdi-phone">Iletisime gecin</v-btn>
          </v-card-text>
        </v-card>
      </div>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>


<script>
export default {
  name: "HomePage",
};
</script>
<style scoped>
.image-container {
  height: 500px;
  width: 100vw;
  /* Ekran genişliği kadar */
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
}

.card-overlay {
  background-color: rgba(43, 43, 43, 0.589);
  /* Siyah transparan arkaplan */
  padding: 20px;
  width: 300px;
}

.small-text {
  font-size: 12px;
  color: #ccc;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.description {
  font-size: 14px;
  color: #bbb;
}
</style>
