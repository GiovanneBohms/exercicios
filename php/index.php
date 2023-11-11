<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="index.css">
</head>

<body>
<?php

class Pessoa{
  public $nome;
  public $idade;
  public function __construct($nome, $idade){
    $this->nome =$nome;
    $this->idade = $idade;
  }

  public function printNomeEIdade(){
    echo $this->nome;
    echo '<br>';
    echo $this->idade;
  }
}
$pessoa = new Pessoa('Giovanne','28');

$pessoa->printNomeEIdade();
?>

</body>

</html>
