document.getElementById('clickMe').addEventListener('click', function() {
  document.getElementById('message').innerText = 'Tombol telah diklik!';
});

document.getElementById('openPopup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});

document.getElementById('sendMessage').addEventListener('click', function() {
  const message = document.getElementById('messageInput').value;
  const phoneNumber = '6282145240617'; // Ganti dengan nomor WhatsApp tujuan
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappLink, '_blank');
  document.getElementById('popup').style.display = 'none';
});