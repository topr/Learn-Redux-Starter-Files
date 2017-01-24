export const incrementLikes = (index) =>
    asAction('INCREMENT_LIKES', { index });

export const addComment = (postId, author, comment) =>
    asAction('ADD_COMMENT', { postId, author, comment });

export const removeComment = (postId, i) =>
    asAction('REMOVE_COMMENT', { postId, i });


const asAction = (type, payload) => ({ type, ...payload });