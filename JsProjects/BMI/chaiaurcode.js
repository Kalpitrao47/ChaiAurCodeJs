const formData = document.querySelector('form');
console.log(formData);
formData.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)      //when you get the values you get it in string so we have to convert it or parse it in int.
    console.log(height);
    const weight = parseInt(document.querySelector('#weight').value)
    console.log(weight);
    const results = document.querySelector('#results')
    console.log(results);

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please Give a Valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please Give a Valid weight ${weight}`;
    } else {
        const bmi =(weight/ ((height*height)/10000)).toFixed(2)
        results.innerHTML = `Your BMI ${bmi}`
    }
});