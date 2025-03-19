<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
 <v-app>
  <v-app-bar app color="white" class="py-3">
      <v-toolbar-title>ShopApp</v-toolbar-title>
      <div class="flex-grow-1">

        <v-btn text @click="$router.push('/')" >Ana Sayfa</v-btn>
        <v-btn text @click="$router.push('/galeri')" class = "text-#003B15">Ürün Galerimiz</v-btn>

        <v-menu offset-y>
          <template v-slot:activator="{ props }">
            <v-btn text v-bind="props">Kategorilerimiz</v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(category, i) in categories" :key="i" @click="() => $router.push(`/category/${category}`)">
              <v-list-item-title>{{ category }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn text @click="$router.push('/iletisim')">İletişim</v-btn>

        
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>
      </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
    </v-app>

    <v-footer color="#003B15" class="mt-12">
    <v-container>
      <!-- Üst Kısım -->
      <v-row class="align-center">
        <!-- Contact Us -->
        <v-col cols="12" md="6" class="text-center">
          <div class="text-h6 mb-2">İletişime Geçin</div>
          <div class="d-flex flex-column">
            <a href="tel:+095456583458" class="text-white text-decoration-none">
              0545 658 3458 Zafer Pek
            </a>
            <a href="mailto:zaferpekk@gmail.com" class="text-white text-decoration-none">
              zaferpekk@gmail.com
            </a>
          </div>
        </v-col>

        <!-- Follow Us -->
        <v-col cols="12" md="6" class="text-center">
          <div class="text-h6 mb-2">Takip edin</div>
          <div class="d-flex justify-center">
            <v-btn icon variant="text" color="white" href="https://www.facebook.com/peksanmetal/?locale=tr_TR" target="https://www.facebook.com/peksanmetal">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon variant="text" color="white" href="https://www.instagram.com/peksanmetal/" target="https://www.instagram.com/peksanmetal/">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon variant="text" color="white" href="#" target="_blank">
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <!-- Alt Kısım -->
      <v-divider class="my-4"></v-divider>
      <div class="text-center text-caption">
        © {{ new Date().getFullYear() }} Peksan Metal. All rights reserved
      </div>
    </v-container>
  </v-footer>
</template>

<style scoped>
.v-footer {
  color: rgb(255, 255, 255);
}

.text-caption {
  opacity: 0.8;
}

.v-list-item {
  color: rgb(0, 0, 0) !important;
  opacity: 0.8;
}
</style>

<script>
export default {
  name: "App",
  data() {
    return {
      categories: ["Kapı Donanımları", "İspanyoletler", "Mobilya Aksesuarları"],
    };
  },
};
</script>


