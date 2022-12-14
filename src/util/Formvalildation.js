export default function onNextFrame() {
    setTimeout(function () {

        var forms = document.querySelectorAll('.needs-validation')

        console.log(forms)
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
      
              form.classList.add('was-validated')
            }, false)
          })
        
    }, 500)
}
