<script setup>
defineProps(['nama', 'jabatan', 'inisial'])
</script>

<template>
  <article class="team-card">
    <div class="initial" aria-hidden="true">{{ inisial }}</div>
    <h3>{{ nama }}</h3>
    <p>{{ jabatan }}</p>
  </article>
</template>

<style scoped>
.team-card {
  width: 180px;
  padding: 20px 16px;
  border: 1px solid var(--border, #d9e1e8);
  border-radius: var(--radius, 10px);
  background: #fff;
  text-align: center;
}

.initial {
  display: grid;
  width: 56px;
  height: 56px;
  margin: 0 auto 12px;
  place-items: center;
  border-radius: 50%;
  background: var(--primary, #2e75b6);
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
}

.team-card h3 {
  margin: 0;
}

.team-card p {
  margin: 6px 0 0;
  color: var(--text-muted, #65717c);
}
</style>
