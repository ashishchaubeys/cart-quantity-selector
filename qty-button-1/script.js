
  const plusBtn = document.querySelector('.plus');
  const minusBtn = document.querySelector('.minus');
  const qtyInput = document.getElementById('qty-input');
  const dealOptions = document.querySelectorAll('.multibuy-option');

  // function updateMultiBuyHighlight(qty) {
  //   options.forEach(option => {
  //     const optQty = parseInt(option.dataset.qty);
  //     if ((qty >= 5 && optQty === 5) || optQty === qty) {
  //       option.classList.add('active');
  //     } else {
  //       option.classList.remove('active');
  //     }
  //   });
  // }

  function updateMultiBuyHighlight(qty) {
    dealOptions.forEach(buy => {
      const optQty = parseInt(buy.dataset.qty);
      if ((qty >= 5 && optQty === 5) || optQty === qty) {
        buy.classList.add('active');
      } else {
        buy.classList.remove('active')
      }
    });
  }

  // ********************************  to do PLUS ****************

  plusBtn.addEventListener('click', () => {
    let qty = +qtyInput.value +1;
    qty = qty > 99 ? 99 : qty;
    qtyInput.value = qty;
    updateMultiBuyHighlight(qty);
  });

// ********************************  to do MINUS  ****************

  minusBtn.addEventListener('click', () => {
    let qty = +qtyInput.value - 1;
    qty = qty < 1 ? 1 : qty;
    qtyInput.value = qty;
    updateMultiBuyHighlight(qty);
  });

  // Initial setup
  updateMultiBuyHighlight(1);
