#include <stdio.h>

// Função que modifica o valor através de um ponteiro
void modificarValor(int *ponteiroParaValor) {
    *ponteiroParaValor = 42; 
}

int main() {
    int numero = 10;
    printf("Antes da função: %d\n", numero);
  
    modificarValor(&numero);
    
    printf("Depois da função: %d\n", numero);

    return 0;
}
