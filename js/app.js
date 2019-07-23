(function () {
    document.getElementById("message-form").addEventListener('submit', function (e) {
        e.preventDefault();

        //getting the value

        const message = document.getElementById("message");
        const value = message.value;
        console.log(value);

        //checking for empty values and if user passes empty value then display the feedback 
        if (value === "") {
            console.log('empty-value')
            const feedback = document.querySelector('.feedback');
            feedback.classList.add("show");
            setTimeout(function () {
                feedback.classList.remove("show");
            }, 2000);
        }

        //change value 

        document.querySelector('.message-content').textContent = value;
        message.value = '';


    });


})();