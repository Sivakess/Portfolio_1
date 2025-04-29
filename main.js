const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Add event listener to toggle navbar and icon
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x'); // This adds/removes the 'bx-x' class for the menu icon
    navbar.classList.toggle('active'); // This toggles the visibility of the navbar
});

// Window scroll event for highlighting active section link
window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Toggle active link based on scroll position
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Close the navbar when a section is clicked in mobile view
    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

// Initialize circle chart after document is ready
$(document).ready(function () {
    $('.circlechart').circlechart();
});

// .about {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     background: var(--second-bg-color);
//     padding: 40px;
// }

// .heading {
//     text-align: center;
//     font-size: 8rem;
//     margin-bottom: 40px; /* Adds spacing between the heading and the cards */
// }

// .about-wrapper {
//     display: flex;
//     justify-content: space-around;
//     flex-wrap: wrap;
//     width: 100%;
//     gap: 20px;
// }

// .about-card {
//     background: #f9f9f9;
//     border-radius: 15px;
//     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//     padding: 20px;
//     text-align: center;
//     flex: 1 1 45%;
//     transition: transform 0.3s ease;
// }

// .about-card:hover {
//     transform: scale(1); /* Slight hover effect */
// }

// .about-card p {
//     margin-bottom: 1.5rem;
//     text-align: center;
// }

// {
// } */
// }