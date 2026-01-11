export const sendWhatsApp = (data) => {
  const msg =
    `New Contact Message\n\nName: ${data.name}\nEmail: ${data.email}\nMessage:\n${data.message}`;

  const url = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
};
