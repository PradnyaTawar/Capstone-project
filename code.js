function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email === 'admin@admin.com' && password === '123456') {
        alert('"Login successful"')

    } else (
        alert('Incorrect email or password')
    )

}


let items = document.querySelectorAll('.carousel .carousel-item ')

items.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
