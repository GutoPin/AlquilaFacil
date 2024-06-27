import {useAuthenticationStore} from "./authentication.store.js";

/**
 * Authentication guard
 * @summary
 * This guard is used to protect routes that require authentication.
 * It checks if the user is signed in and if the route requires authorization.
 * @param to the route to navigate to
 * @param from the route the user is coming from
 * @param next the next guard in the pipeline
 * @returns {*}
 */
export const authenticationGuard = (to, from, next) => {
    const authenticationStore = useAuthenticationStore();
    const isAnonymous = !authenticationStore.isSignedIn;
    const publicRoutes = ['/sign-in', '/sign-up', '/about', '/page-not-found'];
    const routeRequiresToBeAuthenticated = !publicRoutes.includes(to.path);

    if (isAnonymous && routeRequiresToBeAuthenticated) return next({name: 'sign-in'});
    else next();
}