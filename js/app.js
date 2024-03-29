// Smooth Scrolling
$('.navbar a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 76
        }, 1000);
    }

});

// Close responsive menu when scroll trigger is clicked
$('.navbar a[href^="#"]').click(() => {
    $('.navbar-collapse').collapse('hide');
})

// Copyright Year
$(function() {
    var cYear = new Date().getFullYear();
    $('#year').html(cYear);
});

// EmailJS
function sendMail() {
    var cName = document.getElementById('contact-name');
    var cEmail = document.getElementById('contact-email');
    var cMessage = document.getElementById('contact-message');
    var cStatus = document.getElementById('contact-status');

    if (cName.value != '' && cEmail.value != '' && cMessage.value != '') {
        // Send data via EmailJS
        emailjs.send('gmail', 'ritech',
        {
            "to_email": "ri.tech94@gmail.com",
            "from_email": "no-reply@alorthotics.ca",
            "contact_email": cEmail.value,
            "contact_name": cName.value,
            "contact_phone": "No Data",
            "contact_msg": cMessage.value
        });

        // Clear Form Fields
        cName.value = '';
        cEmail.value = '';
        cMessage.value = '';

        // Display Sent Message
        cStatus.innerHTML = 'Message Sent!';
    } else {
        cStatus.innerHTML = 'Please fill the missing fields!';
    }
}