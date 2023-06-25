<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Sidebar from 'primevue/sidebar';

const sidebarIsVisible = ref(false);

const spMenuBtnClick = (evt) => {
  sidebarIsVisible.value = !sidebarIsVisible.value;
};


const headerNavRef = ref();

// header 固定
const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop;
  let scrollTopIsMoved = false;
  let paddingValue = '';

  if (window.matchMedia("(min-width:767px)").matches) {
    scrollTopIsMoved = scrollTop > 95 - 70;
    paddingValue = '95px';
  } else {
    scrollTopIsMoved = scrollTop > 65 - 60;
    paddingValue = '65px';
  }

  if (scrollTopIsMoved) {
    headerNavRef.value.classList.add('fixed');
    document.body.style.paddingTop = paddingValue;
  } else {
    headerNavRef.value.classList.remove('fixed');
    document.body.style.paddingTop = '0';
  }
}

onMounted(() => {
  // header固定のための処理
  window.addEventListener('scroll', handleScroll)
});

onUnmounted(() => {
  // コンポーネントの削除時にheader固定のためのイベントリスナーも削除する
  window.removeEventListener('scroll', handleScroll)
});

</script>

<template>
<!-- header -->
<header class="header" ref="headerNavRef">
  <h1 class="logo"><a href="/">ポケットウェブ</a></h1>
  <nav class="global-navi">
    <ul>
      <li><a v-smooth-scroll href="#news">NEWS</a></li>
      <li><a v-smooth-scroll href="#about">ABOUT</a></li>
      <li><a v-smooth-scroll href="#company">COMPANY</a></li>
      <li><a href="/chat/">CHAT SUPPORT</a></li>
    </ul>
  </nav>

  <!--sp menu start-->
  <button type="button" @click="spMenuBtnClick" class="drawer-toggle drawer-hamburger">
    <span class="sr-only">menu</span>
    <span class="drawer-hamburger-icon"></span>
  </button>

  <Sidebar v-model:visible="sidebarIsVisible" position="right">
    <nav class="drawer-nav_">
      <ul class="drawer-menu">
        <li><a href="/">TOP</a></li>
        <li><a v-smooth-scroll href="#news">NEWS</a></li>
        <li><a v-smooth-scroll href="#about">ABOUT</a></li>
        <li><a v-smooth-scroll href="#company">COMPANY</a></li>
        <li><a href="/chat/">CHAT SUPPORT</a></li>
      </ul>
    </nav>
  </Sidebar>

  <!--sp menu end-->
</header>
</template>

<style scoped>
</style>