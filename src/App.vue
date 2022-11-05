<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TrafficLights from "./components/TrafficLights.vue";
import UtilBar from "./components/UtilBar.vue";

const catogries = document.querySelector("#catogries");
catogries?.addEventListener("scroll", (e) => {
  catogries.classList.add("border-solid border border-gray-500");
});
</script>

<template>
  <div id="main">
    <div id="main-container">
      <div id="left-menu">
        <div id="traffic-lights" class="flex items-center">
          <TrafficLights></TrafficLights>
        </div>
        <div id="catogries"></div>
      </div>
      <div></div>
      <div id="right-container">
        <div id="util-bar">
          <UtilBar></UtilBar>
        </div>
        <div id="content-container"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#main {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

#main-container {
  border: 1px solid rgba(104, 106, 108, 0.22);
  border-radius: 10px;
  display: flex;
  height: 80vh;
  width: 80vw;
}

#left-menu {
  border-radius: 10px 0px 0px 10px;
  border-right: 1px solid black;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(17.2px);
  width: 15%;
  height: 100% - 10px;
  display: flex;
  flex-flow: column;
  overflow: auto;
}

#traffic-lights {
  height: 8%;
  width: 100%;
}

#catogries {
  height: 92%;
  width: 100%;
  overflow: auto;
  padding-bottom: 10px;
}

#right-container {
  flex-flow: column;
  width: 85%;
  height: 100% - 10px;
}

#util-bar {
  height: 8%;
  background-color: #353637;
  border-radius: 0px 10px 0px 0px;
  border-bottom: 1px solid black;
}

#content-container {
  height: 92%;
  background-color: #333333;
  border-radius: 0px 0px 10px 0px;
}
</style>
