import axios from 'axios';

export default {
    user: {
        users:() => axios.get('https://jsonplaceholder.typicode.com/users')
    }
}