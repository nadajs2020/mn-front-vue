import {createStore} from 'vuex';
const remote_api_url = 'http://localhost:5000/api/user/register';
const store = createStore({
    state() {
        return {
            ajax_urls: {
                user_url: `${remote_api_url}/register`,
            },
        }
    },
});

export default store;


