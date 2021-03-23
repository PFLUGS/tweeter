//// setting up character counter which will turn red if user has exceeded limit///
$(document).ready(function() {
  console.log('DOM is ready to be manipulated');

  const max = 140

  $('textarea').on('input', function() {  
    let size = $(this).val().length
    size = max - size
    let counter = $(this).parent().find('.counter')
    counter.text(size);

    if (size >= 0){
      counter.removeClass('colorCounter');
    } else {
      counter.addClass('colorCounter');
    }
  })

///// attempt that didnt work - hoping to get clarity on why it didnt later ////

    // $('textarea').keyup(function(event) {  
  //   let charcount = $(this).val().length
  //   console.log(charcount);

  //   $('#superCounter').val(140 - charcount);
  //   if (charcount >= 0){
  //     counter.removeClass('colorCounter');
  //   } else {
  //     counter.addClass('colorCounter');
  //   }
  // })
  
});


