import {createRouter, createWebHistory} from "vue-router";

import PropietaryCardComponent from "../subscription/components/propietary-card.component.vue";
import OrganizatorCardComponent from "../subscription/components/organizator-card.component.vue";
import TypePremiumComponent from "../subscription/components/type-premium.component.vue";
import Home from "../content/pages/home.vue";
import CreateSpaceAddPhotoComponent from "../space/components/create-space-add-photo.component.vue";
import CreateSpaceDescribeComponent from "../space/components/create-space-describe.component.vue";
import CreateSpaceDescribeOptionComponent from "../space/components/create-space-describe-option.component.vue";
import CreateSpaceFinishComponent from "../space/components/create-space-finish.component.vue";
import CreateSpacePostComponent from "../space/components/create-space-post.component.vue";
import CreateSpacePriceComponent from "../space/components/create-space-price.component.vue";
import CreateSpaceStandOutComponent from "../space/components/create-space-stand-out.component.vue";
import CreateSpaceStartComponent from "../space/components/create-space-start.component.vue";
import CreateSpaceTitleComponent from "../space/components/create-space-title.component.vue";
import CreateSpaceConfirmDirectionComponent from "../space/components/create-space-confirm-direction.component.vue";
import UserForgotPassword from "../user/pages/user-forgot-password.vue";
import UserRegister from "../user/pages/user-register.vue";
import PropertyDetail from "../content/pages/property-detail.vue";
import About from "../content/pages/about.vue";
import MyProperties from "../content/pages/my-properties.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/type-subscription', component: TypePremiumComponent, meta: {title: 'Subscriptions'},},
        {path: '/organizer', component: OrganizatorCardComponent, meta: {title: 'Organizer'},},
        {path: '/proprietary', component: PropietaryCardComponent, meta: {title: 'Proprietary'},},

        {path: '/home', component: Home, meta: {title: 'Home'},},
        { path: '/home-detail/:id', component: PropertyDetail, meta: { title: 'Detail' }, props: true },

        {path: '/add-photo', component: CreateSpaceAddPhotoComponent, meta: {title: 'Add Photo'}, props: true },
        {path: '/confirm-direction', component: CreateSpaceConfirmDirectionComponent, meta: {title: 'Confirm Direction'},},
        {path: '/describe', component: CreateSpaceDescribeComponent, meta: {title: 'Describe'},},
        {path: '/describe-option', component: CreateSpaceDescribeOptionComponent, meta: {title: 'Describe Option'},},
        {path: '/finish', component: CreateSpaceFinishComponent, meta: {title: 'Finish'},},
        {path: '/post', component: CreateSpacePostComponent, meta: {title: 'Post'},},
        {path: '/price', component: CreateSpacePriceComponent, meta: {title: 'Price'},},
        {path: '/stand-out', component: CreateSpaceStandOutComponent, meta: {title: 'Stand Out'},},
        {path: '/start', component: CreateSpaceStartComponent, meta: {title: 'Create'},},
        {path: '/title', component: CreateSpaceTitleComponent, meta: {title: 'Title'},},

        {path: '/forgot-password', component: UserForgotPassword, meta: {title: 'Forgot Password'},},
        {path: '/register', component: UserRegister, meta: {title: 'Register'},},
        {path: '/my-properties', component: MyProperties, meta: {title: 'My properties'},},
        {path:'/about',component:About,meta:{title:'About'}},

        {path: '/', redirect: 'home'}
    ]
});

router.beforeEach((to, from, next)=>
{
    let baseTitle = 'AlquilaFácil';
    document.title = `${baseTitle} | ${to.meta["title"]}`;
    next();
})

export default router

