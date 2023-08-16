#include <stdio.h>


main() {

    int numerosecreto = 42,chute;
   

    printf("\n ********************************");
    printf("\n Bem vindo ao jogo de Adivinhacao");
    printf("\n ********************************");

    for (int i = 1; i<3;i++){

        printf("\n Digite um numero   ");
        scanf("%d", &chute);
        int acertou = chute==numerosecreto;

        if(acertou){
            printf("Parabens! Voce acertou!");
            break;
        }else{
            if(chute > numerosecreto){
                printf("o numero secreto eh menor \n");
            }else{
                printf("o numero secreto eh maior");
            } 
        }
    }
}