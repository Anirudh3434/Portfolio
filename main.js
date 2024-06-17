var typed = new Typed(".text",{
    strings:["Web Developer", "Mobile App Developer" , "Video Editor"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.menu_option');

    for (const link of links) {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetID = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetID);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

document.getElementById('btn').onclick = function() {
    window.location.href = 'https://drive.google.com/file/d/1BdpQxZkzv_hSx9M6A76-C6SOIeVWXFK8/view?usp=sharing' , '_blank';
};

function sendEmail(){
    Email.send({
      
       

        Host : "smtp.elasticemail.com",
        Username : "anigokala3@gmail.com",
        Password : "13B4B0670E6D488F4E214E9E32839B412B80",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

