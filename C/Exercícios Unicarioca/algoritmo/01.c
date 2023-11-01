#include <stdio.h>
#include <stdio.h>

void modifyValue(int *x) {
    *x = 42; // Altera o valor da variável apontada por 'x' para 42
}

int main() {
    int num = 10;

    printf("Valor original: %d\n", num);

    modifyValue(&num);

    printf("Valor modificado: %d\n", num);

    return 0;
}
