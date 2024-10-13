import { ref } from 'vue';
export default (await import('vue')).defineComponent({
    name: 'Home',
    data() {
        return {};
    },
    methods: {
        logClick() {
            console.log('called');
        }
    }
});

function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
    const __VLS_0 = {}.RdsAppBar;
    ({}.RdsAppBar);
    ({}.RdsAppBar);
    __VLS_components.RdsAppBar;
    __VLS_components.rdsAppBar;
    __VLS_components.RdsAppBar;
    __VLS_components.rdsAppBar;
    // @ts-ignore
    [RdsAppBar, RdsAppBar,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onSettingsClick': {} }, ...{ 'onHelpClick': {} }, ...{ 'onAvatarClick': {} }, ...{ 'onAppSwitcherClick': {} }, appSwitcher: ((true)), help: ((true)), settings: ((true)), userName: ("Rahul Aher"), userDescription: ("Administrator"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onSettingsClick': {} }, ...{ 'onHelpClick': {} }, ...{ 'onAvatarClick': {} }, ...{ 'onAppSwitcherClick': {} }, appSwitcher: ((true)), help: ((true)), settings: ((true)), userName: ("Rahul Aher"), userDescription: ("Administrator"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onSettingsClick': {} }, ...{ 'onHelpClick': {} }, ...{ 'onAvatarClick': {} }, ...{ 'onAppSwitcherClick': {} }, appSwitcher: ((true)), help: ((true)), settings: ((true)), userName: ("Rahul Aher"), userDescription: ("Administrator"), }));
    let __VLS_6;
    const __VLS_7 = {
        onSettingsClick: (__VLS_ctx.logClick)
    };
    const __VLS_8 = {
        onHelpClick: (__VLS_ctx.logClick)
    };
    const __VLS_9 = {
        onAvatarClick: (__VLS_ctx.logClick)
    };
    const __VLS_10 = {
        onAppSwitcherClick: (__VLS_ctx.logClick)
    };
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_5.slots)["app-info"];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("app-switcher") }, });
        const __VLS_11 = {}.RdsIcon;
        ({}.RdsIcon);
        __VLS_components.RdsIcon;
        __VLS_components.rdsIcon;
        // @ts-ignore
        [RdsIcon,];
        const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({ height: ("24"), width: ("24"), light: (true), name: ("calendar-outline"), }));
        const __VLS_13 = __VLS_12({ height: ("24"), width: ("24"), light: (true), name: ("calendar-outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_12));
        ({}({ height: ("24"), width: ("24"), light: (true), name: ("calendar-outline"), }));
        // @ts-ignore
        [logClick, logClick, logClick, logClick,];
        const __VLS_16 = __VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("app-name") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_5.slots)["dropdown-content"];
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['app-switcher'];
        __VLS_styleScopedClasses['app-name'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'Home';
    const __VLS_internalComponent = (await import('./App.vue')).default;
}
//# sourceMappingURL=App.vue.js.map