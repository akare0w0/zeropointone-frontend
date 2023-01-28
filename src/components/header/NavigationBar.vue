<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';
import { routes as _routes } from '@/router/index';
import { StaticFiles, type RouteRecordA } from '@/defines';
import { useUserStore } from '@/stores/user';
import { onMounted, ref } from 'vue';
import { ElMessage } from 'element-plus';

const router = useRouter();
const userStore = storeToRefs(useUserStore());
const routes = ref(Array<RouteRecordA>());
const makeAngryCount = ref(0);
const dialog = ref({
    visible:   ref(false),
    loginMode: ref(true),
    title:   '',
    form: ref({
        items: ref([
            {
                label: '账号',
                input: ref(''),
            },
            {
                label: '密码',
                input: ref(''),
            },
            {
                label: '重复密码',
                input: ref(''),
            },
        ]),
        getItems: () => {
            if (dialog.value.loginMode) {
                let items = dialog.value.form.items;
                return Array(items[0], items[1]);
            } else {
                return dialog.value.form.items;
            }
        },
    }),
    onClick: () => {

    },
});

function getSearchBoxInput(): string {
    var searchBox = document.getElementById('nav-id') as HTMLInputElement;
    if (searchBox != null && searchBox.textContent != null) {
        return searchBox.textContent;
    } else {
        return '';
    }
}

function onSearch() {
    const input = getSearchBoxInput();
    if (input == '') {
        makeAngryCount.value++;
        let message = '你要是不输入内容就搜索的话，我可就生气了！(╯▔皿▔)';
        if (makeAngryCount.value == 2) {
            message = '我生气了！！！(╯▔皿▔)╯';
        } else if (makeAngryCount.value == 3) {
            message = '哼！不理你了！可恶/(ㄒoㄒ)/~~';
        } else if (makeAngryCount.value > 3) {
            return ;
        }
        ElMessage.error({
            dangerouslyUseHTMLString: true,
            message: `<span class="text-text text-red-900 font-semibold">${message}</h4>`,
            grouping: true,
        });
    } else {
        router.push({
            path: '/search',
            query: {
                keyword: input,
            }
        });
    }
}

function onLogin() {
    dialog.value.loginMode = true;
    dialog.value.title     = '登录';
    dialog.value.visible   = true;
}

onMounted(() => {
    _routes.forEach((val) => {
        if (val.displayName != null) {
            routes.value.push(val);
        }
    });
});
</script>

<template>
    <el-row align="middle" class="h-navigator-height">
        <!-- logo -->
        <el-col :span="1" class="navi-col-item justify-center">
            <img :src="StaticFiles.logoURL" alt="我是logo"
                class="min-w-logo-min min-h-logo-min max-w-logo-max max-h-logo-max" />
        </el-col>

        <el-col :span="5" class="navi-col-item justify-evenly">
            <RouterLink v-for="route in routes" :key="route.routeRecord.name" :to="route.routeRecord.path">
                <span class="text-black hover:animate-hover-navi-link">
                    {{ route.displayName }}
                </span>
            </RouterLink>
        </el-col>

        <el-col :span="12" class="navi-col-item justify-center">
            <div
                class="ml-5 mr-5 min-w-search-box max-w-search-box w-full h-10 pt-1 pb-1 pl-2 pr-2 outline outline-1 outline-slate-100 rounded-lg flex justify-between items-center">
                <input type="text" id="nav-input" class="w-full h-10 bg-primary-400 outline-none"
                    placeholder="点我开始搜索之旅吧O(∩_∩)O" />
                <el-icon :size="20" class="hover:animate-btn-wave" @click="onSearch">
                    <Search />
                </el-icon>
            </div>
        </el-col>

        <el-col :span="6" class="navi-col-item">
            <div v-if="!userStore.user.value.logged" class="w-full h-full flex items-center justify-center">
                <img src="@/assets/unlogin_avator.png" class="w-11 h-11 mr-8 invert select-none" />
                <el-button-group>
                    <el-button type="primary" round @click="onLogin">登录</el-button>
                    <el-button type="primary" round plain>注册</el-button>
                </el-button-group>
                <el-dialog v-model="dialog.visible" :title="dialog.title" width="49.5%" align-center center>
                    <el-form :model="dialog.form" label-width="110px" label-position="left">
                        <el-form-item v-for="item in dialog.form.getItems()" :key="item.label" :label="item.label">
                            <el-input v-model="item.input" clearable :show-password="item.label == '密码' || item.label == '重复密码'"/>
                        </el-form-item>
                    </el-form>
                    <el-button type="primary" @click="dialog.onClick">
                        {{ dialog.loginMode ? '登录' : '注册' }}
                    </el-button>
                </el-dialog>
            </div>
        </el-col>
    </el-row>

</template>

<style>
#nav-input::placeholder {
    text-align: center;
    font-size: 16px;
    color: whitesmoke;
}
</style>