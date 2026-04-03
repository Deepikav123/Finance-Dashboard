// Add Button
document.querySelector('.addButton').addEventListener('click',()=>{
    document.querySelector('.transactions').classList.add('toggle');
})

// Submit button
document.querySelector('.submit-button').addEventListener('click',()=>{
    document.querySelector('.transactions').classList.remove('toggle');
})

// Cancel button
document.querySelector('.cancel-button').addEventListener('click',()=>{
    document.querySelector('.transactions').classList.remove('toggle');
})
