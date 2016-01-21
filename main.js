
$(document).ready(function() {

  var myRow = $("div").find('.row')
//myRow will be the ROWS
  myRow.append("<span class='font-face hello'>#0xe800 yes</span>")
  myRow.append("<span class='hello oed'></span>")
  myRow.append("<span class='hello xed'></span>")

  myRow.find('span').on('click',
    function() {
      if ($(this).hasClass('xed')) {
        console.log(this)
        $(this).addClass('oed')
        $(this).removeClass('xed')}


      else if ($(this).hasClass('oed')) {
        console.log(this)
        $(this).addClass('xed')
        $(this).removeClass('oed')}

      else $(this).addClass('xed')



      var myArr = ['xed', 'oed']
      var myFunc = function(arr) {
        for (var x in arr){
        console.log(myArr[x] + 'yelp')

        

        }
      }

      myFunc(myArr)

    })


})
