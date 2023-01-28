import type { RouteRecordRaw } from "vue-router";

class StaticFiles {
    static logoURL: string = '/logo.svg';
};

interface User {
    logged:    boolean,
    account?:  string,
    password?: string,
    nickname?: string,
    level?:    number,
};

interface ResizeEventOption {
    width:  number,
    height?: number,
    onResize: Function,
};

interface RouteRecordA {
    routeRecord:  RouteRecordRaw,
    displayName?: string,
}

export {
    StaticFiles,
    type User,
    type ResizeEventOption,
    type RouteRecordA,
};