$(document).ready(function(){

    //movie listing dropdown
    $("#clickhere").click(function(event) {
    $("#shows").slideToggle('slow');
  });
//change opacity of seats on hover
//mouseover function
$('.available').on('mouseover',function(){
    $(this).css('opacity', '0.7');
});
$('.seat.available').on('mouseleave',function(){
    $(this).css('opacity','1');
});



//Make the seats click and bring down the form modal

    var reservations=[];
    var takenSeats =[];

// seats click events
$('.available').on('click', function(e){
  var seatNum = e.target.innerText;
  console.log(seatNum);

        var seat=$(this).text();
     $('#formModal').css('display','block');
     $('#infoForm').slideDown(500);
       $('.close').on('click',function(){
           $('#formModal').css('display','none');
       });

        $('.reserveButton').on('click',function(){
            var nameInp = $('#name').val();
            var emailInp = $('#email').val();
            var ageInp = $('#age').val();
            var phoneInp =$('#phone').val();
            var movieNameInp =$('#movieName').val();
            var seatInp =$('.seat');
            reservations.push({name:nameInp, email:emailInp, age:ageInp, phone:phoneInp,movie:movieNameInp, seat: seatNum});
              $('.seat.available').each(function(x,num){
                reservations.forEach(function(thisSeat){
                  if(num.innerText===thisSeat.seat){
                    $(num).addClass('taken').removeClass('available');
                    for(i=0, i <=reservations.length, i++) {
                      var formName = Math.max(i);
                      console.log(formName);

                    }
                    $('.taken').on('mouseenter', function(){
                      $('#reservedBy').css('display', 'block');
                    });
                  }
                  $('#formModal').css('display','none');
                });
              })
           });
      }); //end of click







//back to top button
    var infoArray=[];
    $('.backToTop').click(function(){
        $('html, body').animate({
    scrollTop: ($('.header').offset().top)
    },500);
    });
});
