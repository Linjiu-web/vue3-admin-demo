<script setup lang="ts">
import { computed, ref } from "vue";

const vvval = ref(0);
const addVal = (x: number, y: number) => {
  return vvval.value = x + y;
};

const setIconSvgStyle = computed(() => {
	return `font-size: 48px;color: #000;`;
});
</script>

<template>
  <div>这是后台管理系统1->{{ vvval }}</div>
  <button @click="addVal(10,66)">666</button>
  <template>
	<i class="el-icon" :style="setIconSvgStyle">
		<component is="Histogram" />
	</i>
  <el-icon><Male /></el-icon>
	<!-- <div v-else-if="isShowIconImg" :style="setIconImgOutStyle">
		<img :src="getIconName" :style="setIconSvgInsStyle" />
	</div>
	<svg v-else-if="isShowLocalSvg" class="svg-icon icon" :style="setIconImgOutStyle">
		<use :href="`#${getIconName}`" />
	</svg>
	<i v-else :class="getIconName" :style="setIconSvgStyle" /> -->
</template>
</template>

<style scoped></style>
