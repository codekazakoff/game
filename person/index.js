window.addEventListener('load', ()=>{
    let form = document.querySelector('form');

    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        let formData = {
            email: document.getElementById('email').value,
            bissNumber : document.getElementById('number').value,
            mobileNumber : document.getElementById('mobile').value
        }
        
        var arr = JSON.parse(localStorage.getItem('formData')) || [];

        // arr.push(formData);

        localStorage.setItem('formData', JSON.stringify([...arr, formData]));
        

        disptData();
    })

    $('.file-btn').change( function(e) {
        $("img").fadeIn("fast").attr('src',URL.createObjectURL(e.target.files[0]));        
    });

    const disptData =() =>{
        let data = JSON.parse(localStorage.getItem('formData'));
        console.log(data)

        const {email,bissNumber,mobileNumber} = data[data.length - 1];

        document.querySelector('.email').append(`${email}`);
        document.querySelector('.bissNumber').append(`${bissNumber}`);
        document.querySelector('.mobileNumber').append(`${mobileNumber}`);
    }
})