<script setup>
import fotoSeragam from '../../seragam.jpg'
import fotoTopi from '../../topi sekolah.jpg'
import fotoTas from '../../tas.jpg'

import ProductCard from '../components/productcard.vue'
const daftarProduk = [
 { id: 1, nama: 'Seragam Sekolah', harga: 75000, gambar: fotoSeragam },
 { id: 2, nama: 'Topi Sekolah', harga: 35000, gambar: fotoTopi },
 { id: 3, nama: 'Tas Sekolah', harga: 120000, gambar: fotoTas },
]
</script>
<template>
 <main>
 <h1>Produk Kami</h1>
 <div class="grid">
 <ProductCard
 v-for="produk in daftarProduk"
 :key="produk.id"
 :nama="produk.nama"
 :harga="produk.harga"
 :gambar="produk.gambar"
 />
 </div>
 </main>
</template>
<style scoped>
.grid {
 display: flex;
 gap: 16px;
 flex-wrap: wrap;
}
</style>
