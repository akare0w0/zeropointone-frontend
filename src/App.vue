<script setup lang="ts">
import { onMounted } from 'vue';
import { ElMessageBox } from 'element-plus';
import NavigationBar from '@/components/header/NavigationBar.vue';

function resize() {
    if (window.document.documentElement.clientWidth <= 1200) {
        ElMessageBox.alert('检测到您的设备屏幕较小，正在切换至移动端...', '嗨嗨嗨(｡･∀･)ﾉﾞ');
        setTimeout(() => {
            window.location.href = 'http://localhost/mobile';
        }, 3000);
    }
}
onMounted(() => {
    window.onresize = () => {
        resize();
    }
    resize();
});
</script>

<template>
    <el-container class="w-screen h-screen">
        <!-- 页面头部 -->
        <el-header class="bg-primary-400">
        <!-- <el-header> -->
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
