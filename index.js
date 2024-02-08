function dataEntry() {


     let age = prompt('Enter your age...');
     if (!age || age >= 1000) {
        age = prompt('enter again❗');
       
     }
     let phoneTest = /^\+\d{12}$/;
     let phoneNumber = prompt('Enter your phone number...');
    if (phoneTest.test(phoneNumber)) {
        console.log(true);
    } else {
        alert('enter again❗');
        
    }

    let emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = prompt('Enter your email...');
    if (!emailTest.test(email)) {
        alert('enter again❗');
        
    }
return false;
}


dataEntry();