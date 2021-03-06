<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Odontograma</title>

  <!-- JQuery -->
  <script src="js/jquery-3.3.1.min.js" type="text/javascript"></script>
  <!-- Bootstrap -->
  <link href="css/base.css" rel="stylesheet">
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <script type="text/javascript" src="js/bootstrap.bundle.min.js"></script>
  <!-- Fontawesome -->
  <script defer src="js/all.min.js"></script>
</head>

<body>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Odontograma</h3>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <nav class="navbar navbar-expand-lg navbar-light bg-light" id="controls">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Restauración</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <input type="radio" name="options" id="fractura" autocomplete="off" checked>
                          </div>
                        </div>
                        <input type="text" value="Realizada" class="form-control" readonly>
                      </div>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <input type="radio" name="options" id="restauracion" autocomplete="off" checked>
                          </div>
                        </div>
                        <input type="text" value="A Realizar" class="form-control" readonly>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Extracción</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <input type="radio" name="options" id="extraccion" autocomplete="off" checked>
                          </div>
                        </div>
                        <input type="text" value="Realizada" class="form-control" readonly>
                      </div>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <input type="radio" name="options" id="extraer" autocomplete="off" checked>
                          </div>
                        </div>
                        <input type="text" value="A Realizar" class="form-control" readonly>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Perno</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <input type="radio" name="options" id="perno" autocomplete="off" checked>
                          </div>
                        </div>
                        <input type="text" value="Realizado" class="form-control" readonly>
                      </div>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <input type="radio" name="options" id="aperno" autocomplete="off" checked>
                          </div>
                        </div>
                        <input type="text" value="A Realizar" class="form-control" readonly>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Corona</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <input type="radio" name="options" id="corona" autocomplete="off" checked>
                          </div>
                        </div>
                        <input type="text" value="Realizada" class="form-control" readonly>
                      </div>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <input type="radio" name="options" id="acoronar" autocomplete="off" checked>
                          </div>
                        </div>
                        <input type="text" value="A Realizar" class="form-control" readonly>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Implante</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <input type="radio" name="options" id="implante" autocomplete="off" checked>
                          </div>
                        </div>
                        <input type="text" value="Realizado" class="form-control" readonly>
                      </div>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <input type="radio" name="options" id="aimplantar" autocomplete="off" checked>
                          </div>
                        </div>
                        <input type="text" value="A Realizar" class="form-control" readonly>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Operaciones</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <div class="input-group" onclick="rev()">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <input type="radio" name="options" id="borrar" autocomplete="off" checked>
                          </div>
                        </div>
                        <input type="text" value="Borrar" class="form-control" readonly>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item">
                    <button class="btn" type="button" name="button" onclick="guardar()">Guardar</button>
                  </li>
                </ul>
              </div>
            </nav>

          </div>
          <div id="tr" class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          </div>
          <div id="tl" class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          </div>
          <div id="tlr" class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
          </div>
          <div id="tll" class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          </div>
        </div>
        <div class="row">
          <div id="blr" class="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
          </div>
          <div id="bll" class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          </div>
          <div id="br" class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          </div>
          <div id="bl" class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          </div>
        </div>
      </div>
    </div>
  </div>
  <form action="./php/some.php" method="post" id="form01">
    <input type="hidden" name="datos" value="" id="datos">
  </form>
  <script src="./js/odonto.js" charset="utf-8"></script>
  <script type="text/javascript">
  //var arreglo = <?php //echo $arreglo; ?>
  </script>
</body>
</html>
