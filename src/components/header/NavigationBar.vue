<script setup lang="ts">
import { StaticFiles } from '@/defines';
</script>

<template>
    <div class="bg-"
        <el-row>
            <el-col :xs="0" :sm="0" :md="2" :lg="2" :xl="2">
                <img :src="StaticFiles.logoURL" alt="我是logo" class="max-w-12 max-h-12" />
            </el-col>
        </el-row>
</template>