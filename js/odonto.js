function replaceAll(find, replace, str) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function createOdontogram() {
  var htmlLecheLeft = "",
  htmlLecheRight = "",
  htmlLeft = "",
  htmlRight = "",
  a = 1;
  for (var i = 9 - 1; i >= 1; i--) {
    //Dientes Definitivos Cuandrante Derecho (Superior/Inferior)
    htmlRight += '<div data-name="value" id="dienteindex' + i + '" class="diente">' +
    '<span style="margin-left: 45px; margin-bottom:5px; display: inline-block !important; border-radius: 10px !important;" class="label label-info">index' + i + '</span>' +
    '<div id="tindex' + i + '" class="cuadro click">' +
    '</div>' +
    '<div id="lindex' + i + '" class="cuadro izquierdo click">' +
    '</div>' +
    '<div id="bindex' + i + '" class="cuadro debajo click">' +
    '</div>' +
    '<div id="rindex' + i + '" class="cuadro derecha click click">' +
    '</div>' +
    '<div id="cindex' + i + '" class="centro click">' +
    '</div>' +
    '</div>';
    //Dientes Definitivos Cuandrante Izquierdo (Superior/Inferior)
    htmlLeft += '<div id="dienteindex' + a + '" class="diente">' +
    '<span style="margin-left: 45px; margin-bottom:5px; display: inline-block !important; border-radius: 10px !important;" class="label label-info">index' + a + '</span>' +
    '<div id="tindex' + a + '" class="cuadro click">' +
    '</div>' +
    '<div id="lindex' + a + '" class="cuadro izquierdo click">' +
    '</div>' +
    '<div id="bindex' + a + '" class="cuadro debajo click">' +
    '</div>' +
    '<div id="rindex' + a + '" class="cuadro derecha click click">' +
    '</div>' +
    '<div id="cindex' + a + '" class="centro click">' +
    '</div>' +
    '</div>';
    if (i <= 5) {
      //Dientes Temporales Cuandrante Derecho (Superior/Inferior)
      htmlLecheRight += '<div id="dienteLindex' + i + '" style="left: -25%;" class="diente-leche">' +
      '<span style="margin-left: 45px; margin-bottom:5px; display: inline-block !important; border-radius: 10px !important;" class="label label-primary">index' + i + '</span>' +
      '<div id="tlecheindex' + i + '" class="cuadro-leche top-leche click">' +
      '</div>' +
      '<div id="llecheindex' + i + '" class="cuadro-leche izquierdo-leche click">' +
      '</div>' +
      '<div id="blecheindex' + i + '" class="cuadro-leche debajo-leche click">' +
      '</div>' +
      '<div id="rlecheindex' + i + '" class="cuadro-leche derecha-leche click click">' +
      '</div>' +
      '<div id="clecheindex' + i + '" class="centro-leche click">' +
      '</div>' +
      '</div>';
    }
    if (a < 6) {
      //Dientes Temporales Cuandrante Izquierdo (Superior/Inferior)
      htmlLecheLeft += '<div id="dienteLindex' + a + '" class="diente-leche">' +
      '<span style="margin-left: 45px; margin-bottom:5px; display: inline-block !important; border-radius: 10px !important;" class="label label-primary">index' + a + '</span>' +
      '<div id="tlecheindex' + a + '" class="cuadro-leche top-leche click">' +
      '</div>' +
      '<div id="llecheindex' + a + '" class="cuadro-leche izquierdo-leche click">' +
      '</div>' +
      '<div id="blecheindex' + a + '" class="cuadro-leche debajo-leche click">' +
      '</div>' +
      '<div id="rlecheindex' + a + '" class="cuadro-leche derecha-leche click click">' +
      '</div>' +
      '<div id="clecheindex' + a + '" class="centro-leche click">' +
      '</div>' +
      '</div>';
    }
    a++;
  }
  $("#tr").append(replaceAll('index', '1', htmlRight));
  $("#tl").append(replaceAll('index', '2', htmlLeft));
  $("#tlr").append(replaceAll('index', '5', htmlLecheRight));
  $("#tll").append(replaceAll('index', '6', htmlLecheLeft));


  $("#bl").append(replaceAll('index', '3', htmlLeft));
  $("#br").append(replaceAll('index', '4', htmlRight));
  $("#bll").append(replaceAll('index', '7', htmlLecheLeft));
  $("#blr").append(replaceAll('index', '8', htmlLecheRight));
  cargar();
}
var arrayPuente = [];
$(document).ready(function() {
  createOdontogram();
  $(".click").click(function(event) {
    //var control = $("#controls").children().find('.active').attr('id');
    var control = $( "input:checked" ).attr('id');
    var cuadro = $(this).find("input[name=cuadro]:hidden").val();
    //console.log($(this).attr('id'))
    switch (control) {
      case "fractura":
      if ($(this).hasClass("click-blue")) {
        $(this).removeClass('click-blue');
        $(this).addClass('click-red 1');
      } else {
        if ($(this).hasClass("click-red")) {
          $(this).removeClass('click-red');
        } else {
          $(this).addClass('click-red 1');
        }
      }
      break;
      case "restauracion":
      if ($(this).hasClass("click-red")) {
        $(this).removeClass('click-red');
        $(this).addClass('click-blue 1');
      } else {
        if ($(this).hasClass("click-blue")) {
          $(this).removeClass('click-blue');
        } else {
          $(this).addClass('click-blue 1');
        }
      }
      break;
      case "extraccion":
      var dientePosition = $(this).position();
      $(this).parent().children().each(function(index, el) {
        var pos2 = $(el).position();
        if ($(el).hasClass("centro") || $(el).hasClass("centro-leche")) {
          $(this).parent().append('<i class="1 rojo fas fa-times fa-3x fa-fw"></i>');
          if ($(el).hasClass("centro")) {
            $(this).parent().children("i").css({
              "position": "absolute",
              "top": pos2.top -10,
              "left": pos2.left -17
            });
            $(this).parent().children("i")[0].id = "ii"+$(this).parent()[0].getAttribute('id')+"er";
          } else {
            $(this).parent().children("i").css({
              "position": "absolute",
              "top": pos2.top -15,
              "left": pos2.left -22
            });
            $(this).parent().children("i")[0].id = "ii"+$(this).parent()[0].getAttribute('id')+"eR";
          }
          //
        }
      });
      break;
      case "extraer":
      var dientePosition = $(this).position();
      $(this).parent().children().each(function(index, el) {
        var pos2 = $(el).position();
        if ($(el).hasClass("centro") || $(el).hasClass("centro-leche")) {
          $(this).parent().append('<i class="1 azul fas fa-times fa-3x fa-fw"></i>');
          if ($(el).hasClass("centro")) {
            $(this).parent().children("i").css({
              "position": "absolute",
              "top": pos2.top -10,
              "left": pos2.left -17
            });
            $(this).parent().children("i")[0].id = "ii"+$(this).parent()[0].getAttribute('id')+"er";
          } else {
            $(this).parent().children("i").css({
              "position": "absolute",
              "top": pos2.top -15,
              "left": pos2.left -22
            });
            $(this).parent().children("i")[0].id = "ii"+$(this).parent()[0].getAttribute('id')+"eR";
          }
          //
        }
      });
      break;
      case "puente":
      var dientePosition = $(this).position();
      $(this).parent().children().each(function(index, el) {
        var pos2 = $(el).position();
        if ($(el).hasClass("centro") || $(el).hasClass("centro-leche")) {
          $(this).parent().append('<i class="1 rojo fas fa-grip-lines fa-2x fa-fw"></i>');
          if ($(el).hasClass("centro")) {
            $(this).parent().children("i").css({
              "position": "absolute",
              "top": pos2.top -3,
              "left": pos2.left -8
            });
          } else {
            $(this).parent().children("i").css({
              "position": "absolute",
              "top": pos2.top -8,
              "left": pos2.left -13
            });
          }
          //
          $(this).parent().children("i")[0].id = "ii"+$(this).parent()[0].getAttribute('id')+"pu";
        }
      });
      break;
      case "perno":
      var dientePosition = $(this).position();
      $(this).parent().children().each(function(index, el) {
        var pos2 = $(el).position();
        if ($(el).hasClass("centro") || $(el).hasClass("centro-leche")) {
          $(this).parent().append('<i class="1 rojo fas fa-angle-up fa-2x fa-fw"></i>');
          if ($(el).hasClass("centro")) {
            $(this).parent().children("i").css({
              "position": "absolute",
              "top": pos2.top -3,
              "left": pos2.left -8
            });
            $(this).parent().children("i")[0].id = "ii"+$(this).parent()[0].getAttribute('id')+"pr";
          } else {
            $(this).parent().children("i").css({
              "position": "absolute",
              "top": pos2.top -8,
              "left": pos2.left -13
            });
            $(this).parent().children("i")[0].id = "ii"+$(this).parent()[0].getAttribute('id')+"pR";
          }
          //
        }
      });
      break;
      case "aperno":
      var dientePosition = $(this).position();
      $(this).parent().children().each(function(index, el) {
        var pos2 = $(el).position();
        if ($(el).hasClass("centro") || $(el).hasClass("centro-leche")) {
          $(this).parent().append('<i class="1 azul fas fa-angle-up fa-2x fa-fw"></i>');
          if ($(el).hasClass("centro")) {
            $(this).parent().children("i").css({
              "position": "absolute",
              "top": pos2.top -3,
              "left": pos2.left -8
            });
            $(this).parent().children("i")[0].id = "ii"+$(this).parent()[0].getAttribute('id')+"pr";
          } else {
            $(this).parent().children("i").css({
              "position": "absolute",
              "top": pos2.top -8,
              "left": pos2.left -13
            });
            $(this).parent().children("i")[0].id = "ii"+$(this).parent()[0].getAttribute('id')+"pR";
          }
          //
        }
      });
      break;
      case "corona":
      var dientePosition = $(this).position();
      $(this).parent().children().each(function(index, el) {
        var pos2 = $(el).position();
        if ($(el).hasClass("centro") || $(el).hasClass("centro-leche")) {
          if ($(el).hasClass("centro")) {
            $(this).parent().append('<i class="1 rojo fas fa-circle fa-2x fa-fw"></i>');
            $(this).parent().children("i").css({
              "position": "absolute",
              "top": pos2.top -3,
              "left": pos2.left -7
            });
            $(this).parent().children("i")[0].id = "ii"+$(this).parent()[0].getAttribute('id')+"cr";
          } else {
            $(this).parent().append('<i class="1 rojo fas fa-circle fa-1x fa-fw"></i>');
            $(this).parent().children("i").css({
              "position": "absolute",
              "top": pos2.top -1,
              "left": pos2.left -3
            });
            $(this).parent().children("i")[0].id = "ii"+$(this).parent()[0].getAttribute('id')+"cR";
          }
          //
        }
      });
      break;
      case "acoronar":
      var dientePosition = $(this).position();
      $(this).parent().children().each(function(index, el) {
        var pos2 = $(el).position();
        if ($(el).hasClass("centro") || $(el).hasClass("centro-leche")) {
          if ($(el).hasClass("centro")) {
            $(this).parent().append('<i class="1 azul fas fa-circle fa-2x fa-fw"></i>');
            $(this).parent().children("i").css({
              "position": "absolute",
              "top": pos2.top -3,
              "left": pos2.left -7
            });
            $(this).parent().children("i")[0].id = "ii"+$(this).parent()[0].getAttribute('id')+"cr";
          } else {
            $(this).parent().append('<i class="1 azul fas fa-circle fa-1x fa-fw"></i>');
            $(this).parent().children("i").css({
              "position": "absolute",
              "top": pos2.top -1,
              "left": pos2.left -3
            });
            $(this).parent().children("i")[0].id = "ii"+$(this).parent()[0].getAttribute('id')+"cR";
          }
          //
        }
      });
      break;
      case "implante":
      var dientePosition = $(this).position();
      $(this).parent().children().each(function(index, el) {
        var pos2 = $(el).position();
        if ($(el).hasClass("centro") || $(el).hasClass("centro-leche")) {
          if ($(el).hasClass("centro")) {
            $(this).parent().append('<i class="1 rojo fas fa-italic fa-2x fa-fw"></i>');
            $(this).parent().children("i").css({
              "position": "absolute",
              "top": pos2.top -3,
              "left": pos2.left -7
            });
            $(this).parent().children("i")[0].id = "ii"+$(this).parent()[0].getAttribute('id')+"ir";
          } else {
            $(this).parent().append('<i class="1 rojo fas fa-italic fa-1x fa-fw"></i>');
            $(this).parent().children("i").css({
              "position": "absolute",
              "top": pos2.top -1,
              "left": pos2.left -3
            });
            $(this).parent().children("i")[0].id = "ii"+$(this).parent()[0].getAttribute('id')+"iR";
          }
          //
        }
      });
      break;
      case "aimplantar":
      var dientePosition = $(this).position();
      $(this).parent().children().each(function(index, el) {
        var pos2 = $(el).position();
        if ($(el).hasClass("centro") || $(el).hasClass("centro-leche")) {
          if ($(el).hasClass("centro")) {
            $(this).parent().append('<i class="1 azul fas fa-italic fa-2x fa-fw"></i>');
            $(this).parent().children("i").css({
              "position": "absolute",
              "top": pos2.top -3,
              "left": pos2.left -7
            });
            $(this).parent().children("i")[0].id = "ii"+$(this).parent()[0].getAttribute('id')+"ir";
          } else {
            $(this).parent().append('<i class="1 azul fas fa-italic fa-1x fa-fw"></i>');
            $(this).parent().children("i").css({
              "position": "absolute",
              "top": pos2.top -1,
              "left": pos2.left -3
            });
            $(this).parent().children("i")[0].id = "ii"+$(this).parent()[0].getAttribute('id')+"iR";
          }
          //
        }
      });
      break;
    }
    return false;
  });
  return false;
});

function guardar() {
  var arreglo =[];

  function inserto(index, item) {
    var obj = {
      "i": item.id,
      "c": Array.from(item.classList)
    }
    arreglo.push(obj);
  }
  $(".1").each(inserto);

  $.ajax({
    method: "POST",
    url: "./php/some.php",
    data: {"datos":JSON.stringify(arreglo)}
  })
}

function cargar() {
  if (typeof arreglo !== "undefined") {
    function recargo(item, index) {
      var id = item["i"];
      var clases = item["c"].join(" ");

      if (id.indexOf("ii") == -1) {
        $("#"+id).addClass(clases);
      } else {
        var idp = id.slice(2,-2);
        var tipo = id.slice(-2);
        //var pos3 = $("#"+idp).position();
        $("#"+idp).append('<i id="'+id+'" class="fas '+clases+'"></i>');
        var pos3 = $("#"+id).siblings(".centro,.centro-leche").position();
        switch (tipo) {
          case "er":
          $("#"+id).css({
            "position": "absolute",
            "top": pos3.top -10,
            "left": pos3.left -17
          });
          break;
          case "eR":
          $("#"+id).css({
            "position": "absolute",
            "top": pos3.top -15,
            "left": pos3.left -22
          });
          break;
          case "pr":
          $("#"+id).css({
            "position": "absolute",
            "top": pos3.top -3,
            "left": pos3.left -8
          });
          break;
          case "pR":
          $("#"+id).css({
            "position": "absolute",
            "top": pos3.top -8,
            "left": pos3.left -13
          });
          break;
          case "cr":
          $("#"+id).css({
            "position": "absolute",
            "top": pos3.top -3,
            "left": pos3.left -7
          });
          break;
          case "cR":
          $("#"+id).css({
            "position": "absolute",
            "top": pos3.top -1,
            "left": pos3.left -3
          });
          break;
          case "ir":
          $("#"+id).css({
            "position": "absolute",
            "top": pos3.top -3,
            "left": pos3.left -7
          });
          break;
          case "iR":
          $("#"+id).css({
            "position": "absolute",
            "top": pos3.top -1,
            "left": pos3.left -3
          });
          break;
          default:

        }
      }
    }
    arreglo.forEach(recargo);
  }
}
