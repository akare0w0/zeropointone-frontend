import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from '@/defines';


export const useUserStore = defineStore('user', () => {
    const user = ref<User>({
        logged: false,
    });

    function getUser() {
        return user.value;
    }

    function login(newUser: User) {
        user.value.logged   = true;
        user.value.account  = newUser.account;
        user.value.password = newUser.password;
        user.value.nickname = newUser.nickname;
        user.value.level    = newUser.level;
    }

    function haveLogged() {
        return user.value.logged;
    }

    return {
        user,
        getUser,
        login,
        haveLogged,
    }
});