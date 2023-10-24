#include <stdio.h>

int entradaDeDados(){
  int numero;
  printf("\nEntre com um numero inteiros nao-nulo:  ");
  scanf("%d", &numero);
  return numero;
}

int quadrado(int numero){
  return numero * numero;
}

int main() {
  int num, quad;  
  num = entradaDeDados();
  quad = quadrado(num);
  printf("O quadrado do numero %d e' %d\n", num, quad);
  return 0;
}
