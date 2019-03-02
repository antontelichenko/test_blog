import axios from 'axios';

export function postsAll(){

    const request=axios.get(`https://simple-blog-api.crew.red/posts`)
        .then(response=>response.data)


    return{
        type:'GET_POSTS_ALL',
        payload: request
    }

}

export function postDetail(id){

    const request=axios.get(`https://simple-blog-api.crew.red/posts/?id=${id}&embed_comments`)
        .then(response=>response.data)

    return{
        type:'GET_POSTS_DETAIL',
        payload: request
    }

}

export function addPost(title, body, date){

    const request=axios.post(`https://simple-blog-api.crew.red/posts`, {
        title,
        body,
        date
      })
    return{
        type:'POST_POSTS_DETAIL',
        payload: request
    }

}
export function updatePost(id, title, body, date){
    const request = axios.put(`https://simple-blog-api.crew.red/posts/${id}`,{ title,date,body})
                .then(response => response.data);

    return {
        type:'POST_UPDATE',
        payload:request
    }

}

export function deletePost(id){
    const request = axios.delete(`https://simple-blog-api.crew.red/posts/${id}`)
                    .then(response => response.data)

    return {
        type:'POST_DELETE',
        payload: {
            post:request
        }
    }
}