export const createProject=(project)=>{
    //because thunk.withExtraArgument we have access to extra argument added to dispatch and getState
return (dispatch,getState,{ getFirebase, getFirestore })=>{
    //make async call
    const db=getFirestore();
    db.collection('projects').add({
        ...project,
        authorFirstName:'Net',
        authorLastName:'Ninja',
        authorId:12345,
        createdAt:new Date()
    }).then(()=>{
        return  dispatch({type:'CREATE_PROJECT',payload:project})
    });

   
}
}