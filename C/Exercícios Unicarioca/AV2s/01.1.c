#include <stdio.h>

// Função que modifica o valor através de um ponteiro
void modificarValor(int *ponteiroParaValor) {
    *ponteiroParaValor = 42; // Modifica o valor apontado pelo ponteiro
}

int main() {
    int numero = 10;
    printf("Antes da função: %d\n", numero);
    // Chama a função passando um ponteiro para o valor
    modificarValor(&numero);
    printf("Depois da função: %d\n", numero);

    return 0;
}
