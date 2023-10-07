#include <stdio.h>

int main(){
    int n;
    printf("Digite um numero");
    scanf("%d",&n);

    switch (n){
        case 1:
            printf("O numero foi 1");
            break;
        case 2:
            printf("O numero foi 2");
            break;
        default:
            printf("Opcao invalida");
            break;
    }


    return 0;
}