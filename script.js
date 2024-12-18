document.addEventListener('DOMContentLoaded', function() {
    console.log('Witryna załadowana');
    
    // Animacja dla tła nagłówka
    const header = document.querySelector('header');
    if (header) {  // Sprawdzanie, czy element 'header' istnieje
        header.style.transition = 'background 0.5s';
        header.style.background = '#42f542';
    }

    // Animacja dla obrazów w galerii
    const images = document.querySelectorAll('.image-container img');
    images.forEach((img) => {
        img.style.transition = 'transform 0.5s'; // Dodanie przejścia dla transformacji
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)'; 
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)'; 
        });
    });
});
