<template>
    <v-container class="pt-12">
      <!-- Başlık -->
      <v-row class="mb-8">
        <v-col cols="12">
          <h2 class="text-h4 font-weight-bold">Sorularınız için bizimle iletişime geçebilirsiniz</h2>
          <p class="text-h6">İletişim adreslerimiz</p>
        </v-col>
      </v-row>
  
      <!-- İletişim Seçenekleri -->
      <v-row class="mb-12">
  
        <!-- Email -->
        <v-col cols="12" md="4">
          <v-card height="100%" elevation="2" class="pa-6">
            <v-card-title class="text-h5 mb-2">E-mail Adresimiz</v-card-title>
            <a href="mailto:zaferpekk@gmail.com" class="text-decoration-none">
              <v-btn color="secondary" block>
                zaferpekk@gmail.com
              </v-btn>
            </a>
          </v-card>
        </v-col>
  
        <!-- Phone -->
        <v-col cols="12" md="4">
          <v-card height="100%" elevation="2" class="pa-6">
            <v-card-title class="text-h5 mb-2">Telefon Numaramız</v-card-title>
            <a href="tel:+905456583458" class="text-decoration-none">
              <v-btn color="success" block>
                0545 658 3458
              </v-btn>
            </a>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- Çalışma Saatleri -->
      <v-row>
        <v-col cols="12">
          <p class="text-body-2 text-medium-emphasis text-center">
            Çalışma saatlerimiz: Hafta içi 09:00 - 18:00 Cumartesi 09:00 - 16:00
          </p>
        </v-col>
      </v-row>
    </v-container>
  </template>

  
  

  <style scoped>
  .v-card {
    transition: transform 0.3s ease;
  }
  
  .v-card:hover {
    transform: translateY(-5px);
  }
  
  .v-btn {
    letter-spacing: normal;
    text-transform: none;
  }
  </style>