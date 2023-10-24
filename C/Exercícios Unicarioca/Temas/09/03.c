#include <stdio.h>

float entradaDeDados(){
  float VALOR;
  printf("\nEntre com o valor do produto:  ");
  scanf("%f", &VALOR);
  return VALOR;
}

float desconto(float valor){
  return valor*9/100;
}

float novoValor(float valor, float desconto){
  return valor - desconto;
}

 void resultado(float DESCONTO, float NVALOR){
  printf("Desconto            =   %6.2f \n", DESCONTO);
  printf("Valor com  Desconto =   %6.2f", NVALOR);
}
int main() {
  float VALOR,NVALOR,DESCONTO;  
  VALOR = entradaDeDados();
  DESCONTO = desconto(VALOR);
  NVALOR = novoValor(VALOR, DESCONTO);
  resultado(DESCONTO, NVALOR);
  return 0;
}