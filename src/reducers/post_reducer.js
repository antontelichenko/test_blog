export default function (state={}, action) {

    switch(action.type){

        case'GET_POSTS_ALL':
            return{...state,postList:action.payload.reverse()}

        case'GET_POSTS_DETAIL':
            return{...state,postListDetail:action.payload}

        case'POST_POSTS_DETAIL':
            return{...state,postListDetailCheck:action.payload}

        case'POST_DELETE':
            return{...state,postDeleted:action.payload}
       
        case'POST_UPDATE':
            return{...state,postUpdated:action.payload}

            default:
            return state;
    }
}