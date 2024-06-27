import {defineStore} from "pinia";
import {AuthenticationService} from "./authentication.service.js";
import {SignInResponse} from "../model/sign-in.response.js";
import {SignUpResponse} from "../model/sign-up.response.js";

const authenticationService = new AuthenticationService();

/**
 * Authentication store
 *
 * @summary
 * Store for handling authentication state.
 * This store is used to manage the state of the user's authentication status.
 * It provides methods for signing in, signing up, and signing out.
 * It also provides getters for the user's authentication status and information.
 */
export const useAuthenticationStore = defineStore( {
    id: 'authentication',
    state: () => ({signedIn: false, userId: 0, userName: ''}),
    getters: {

        /**
         * Is signed in
         * @summary
         * Returns true if the user is signed in, otherwise false.
         * @param state
         * @returns {boolean}
         */
        isSignedIn: (state) => state["signedIn"],

        /**
         * Current user id
         * @summary
         * Returns the current user's id.
         * @param state
         * @returns {number}
         */
        currentUserId: state => state["userId"],

        /**
         * Current username
         * @summary
         * Returns the current username.
         * @param state
         * @returns {string}
         */
        currentUsername: state => state["username"],
        /**
         * Current token
         * @returns {string} - The current token
         */
        currentToken: () => localStorage.getItem('token')
    },
    actions: {
        /**
         * Sign in
         * @summary
         * Signs in the user with the given credentials.
         * @param signInRequest - The sign-in request object
         * @param router - The router object
         * @returns {Promise<void>}
         */
        async signIn(signInRequest, router) {
            authenticationService.signIn(signInRequest)
                .then(response => {

                    let signInResponse = new SignInResponse(response.data.id, response.data.username, response.data.token);
                    this.signedIn = true;
                    this.userId = signInResponse.id;
                    this.username = signInResponse.username;
                    localStorage.setItem('token', signInResponse.token);
                    console.log(signInResponse);
                    router.push({name: 'home'});
                })
                .catch(error => {
                    console.error(error);
                    router.push({name: 'sign-in'});
                });
        },

        /**
         * Sign up
         * @summary
         * Signs up the user with the given credentials.
         * @param signUpRequest - The sign-up request object
         * @param router - The router object
         * @returns {Promise<void>}
         */
        async signUp(signUpRequest, router) {
            authenticationService.signUp(signUpRequest)
                .then(response => {
                    let signUpResponse = new SignUpResponse(response.data.message);
                    console.log(signUpResponse.message);
                    router.push({name: 'sign-in'});
                    console.log(signUpResponse);
                })
                .catch(error => {
                    console.error(error);
                    router.push({name: 'sign-in'});
                });
        },

        /**
         * Sign out
         * @summary
         * Signs out the user.
         * @param router - The router object
         * @returns {Promise<void>}
         */
        async signOut(router) {
            this.signedIn = false;
            this.userId = 0;
            this.username = '';
            localStorage.removeItem('token');
            console.log('Signed out');
            await router.push({name: 'sign-in'});
        }
    }
})