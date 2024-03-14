const formData = document.querySelector('form');
console.log(formData);
formData.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    console.log(height);
    const weight = parseInt(document.querySelector('#weight').value)
    console.log(weight);
    const results = document.querySelector('#results')
    console.log(results);

    if(height === '' || height < 0 isNaN(height)){
        results.innerHTML = 'Please Give a Valid height'
    }
    if(weight === '' || weight < 0 isNaN(weight)){
        results.innerHTML = 'Please Give a Valid weight'
    }
})