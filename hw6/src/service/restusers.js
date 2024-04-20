import axios from 'axios';

const API = `https://api.github.com`;

const service = {
    getUser: username => axios(API+`/users/${username}`).then(({data}) => data).catch(({error}) => error),
    getUserRepositories: username => axios(API+`/users/${username}/repos?per_page=100`).then(({data}) => data).catch(({error}) => error)
}

export default service;