document.getElementById("post-btn").addEventListener('click',function(){
    const newComment = document.getElementById("comment-area")
  
    //where to add 
    const comSection = document.getElementById('comment-section')

    //what to add
    const pComment = document.createElement('p')
    pComment.innerText = newComment.value

    //append the child 
    comSection.appendChild(pComment)

    newComment.value =' '


})