const title = document.querySelector('.title')
const text = `Dunia mungkin melihatmu hanya sebagai seorang ibu, tapi bagi Ayah dan anak-anak, Bunda adalah dunia kami. Terima kasih sudah menjaga kami dengan sangat baik, Tanpa Bunda, kami bukanlah apa-apa.`.split('')

// Create container for better responsive layout
title.style.display = 'flex'
title.style.flexWrap = 'wrap'
title.style.justifyContent = 'center'
title.style.gap = '0.5rem'

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`
  } else {
    title.innerHTML += `<span style='width: 1rem'></span>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});