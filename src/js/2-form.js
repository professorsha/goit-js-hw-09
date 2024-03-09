const formSubmit = document.querySelector('form.feedback-form');
formSubmit.addEventListener("input", hadlerSubmit);

function hadlerSubmit(event) {
  event.preventDefault();
  alert('gjkfdjghldfj')
//   const currentImage = event.target;
//   if (currentImage === event.currentTarget) return;

//   const instance = basicLightbox.create(
//     `
//     <img src="${currentImage.dataset.source}" width="800" height="600">
//   `,
//     {
//       onShow: () => document.addEventListener("keydown", onKeyPress),
//       onClose: () => document.removeEventListener("keydown", onKeyPress),
//     }
//   );
//   const onKeyPress = (e) => {
//     if (e.key === "Escape") {
//       instance.close();
//     }
//   };
//   instance.show();
}