<script setup lang="ts">
import NavigationBar from '@/components/header/NavigationBar.vue';
</script>

<template>
    <el-container class="w-screen h-screen">
        <!-- 页面头部 -->
        <el-header>
            <NavigationBar />
        </el-header>

        <!-- 页面的中心 -->
        <el-main>
            <RouterView />
        </el-main>

        <!-- 页面的脚部 -->
        <el-footer>

        </el-footer>
    </el-container>
</template>

<style scoped></style>
