<script setup>
import TeamCard from '../components/TeamCard.vue'

const daftarTim = [
 { id: 1, nama: 'rifki', jabatan: 'nonton anime', inisial: 'r' },
 { id: 2, nama: 'rifki', jabatan: 'nonton anime', inisial: 'r' },
 { id: 3, nama: 'rifki', jabatan: 'nonton anime', inisial: 'r' },
 { id: 4, nama: 'rifki', jabatan: 'nonton anime', inisial: 'r' },
]
</script>
<template>
 <main class="page">
  <section class="page-header">
   <div class="container">
    <h1>Tentang Kami</h1>
   </div>
  </section>

  <div class="container">
   <section class="cerita">
    <div class="teks">
     <h2>Cerita Kami</h2>
     <p>Online shop yang dikelola oleh SMK Yadika Soreang, khususnya jurusan PPLG (Pengembangan Perangkat Lunak dan Gim), merupakan sarana pembelajaran yang memanfaatkan teknologi digital dalam kegiatan jual beli. Melalui online shop ini, siswa dapat mempraktikkan kemampuan seperti membuat website, mengelola data, dan mengembangkan tampilan digital</p>
     <p>Selain itu, online shop ini membantu siswa mengembangkan kreativitas, kerja sama, dan jiwa kewirausahaan. Siswa dapat belajar mengelola produk, melakukan promosi, melayani pelanggan, serta memahami proses bisnis secara langsung.</p>
    </div>
    <div class="gambar">
     <p>[Foto / ilustrasi toko]</p>
    </div>
   </section>

   <section class="tim">
    <h2>Tim Kami</h2>
    <div class="anggota">
     <TeamCard
      v-for="orang in daftarTim"
      :key="orang.id"
      :nama="orang.nama"
      :jabatan="orang.jabatan"
      :inisial="orang.inisial"
     />
    </div>
   </section>
  </div>
 </main>
</template>
<style scoped>
.page {
 min-height: calc(100vh - 140px);
 padding: 0 0 80px;
 background: #f5f7fb;
}
.page-header {
 background: linear-gradient(135deg, #1f4e79, #2e75b6);
 color: #fff;
 text-align: center;
 padding: 64px 20px;
}
.page-header h1 {
 color: #fff;
 font-size: clamp(1.8rem, 4vw, 2.4rem);
}
.cerita {
 display: flex;
 align-items: center;
 gap: 40px;
 margin-top: 64px;
}
.teks { flex: 1; }
.teks h2 { margin-bottom: 16px; }
.teks p { margin-top: 12px; }
.gambar {
 flex: 1;
 min-height: 300px;
 display: grid;
 place-items: center;
 background: #eaf2f8;
 border: 2px dashed #b8c9d9;
 border-radius: 10px;
 color: #65717c;
 font-weight: 600;
}
.tim {
 margin-top: 64px;
 text-align: center;
}
.tim h2 { margin-bottom: 24px; }
.anggota {
 display: flex;
 gap: 20px;
 flex-wrap: wrap;
 justify-content: center;
}
@media (max-width: 768px) {
 .cerita { flex-direction: column; gap: 24px; }
 .gambar { min-height: 220px; }
}
</style>    