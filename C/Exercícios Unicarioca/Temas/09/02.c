#include <stdio.h>

float calcularMedia() {
    float N1, N2, N3;
    printf("\nEntre com a nota 1: ");
    scanf("%f", &N1);
    printf("Entre com a nota 2: ");
    scanf("%f", &N2);
    printf("Entre com a nota 3: ");
    scanf("%f", &N3);
    float media = (N1 + N2 + N3) / 3;
    return media;
}

int main() {
    float M = calcularMedia();
    printf("A media eh %4.1f\n", M);
    return 0;
}
