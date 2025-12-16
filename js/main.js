
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Dunia mungkin melihatmu hanya sebagai seorang ibu, tapi bagi Ayah dan anak-anak, Bunda adalah dunia kami. Terima kasih sudah menjaga kami dengan sangat baik, Tanpa Bunda, kami bukanlah apa-apa.').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};