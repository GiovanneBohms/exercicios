#include <stdio.h>  // Inclua a biblioteca stdio.h para usar printf

int f(int *a, int *b, int c) {
    while (*b <= c) {
        *a = *b + c;
        *b = *b + 1;
    }
    return *a + *b + c;
}

int main() {
    int x = 10, y = 2, z = 3;

    int resultado = f(&x, &y, z);
    printf("%d %d %d %d", resultado, x, y, z);
    return 0;
}