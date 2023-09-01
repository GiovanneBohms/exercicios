#include <stdio.h>

int main(){

    float n1,n2,n3,media;
    printf("Digite as 3 notas em sequencia, EXEP: 7.5 7.2 8.0\n");
    scanf("%f %f %f",&n1,&n2,&n3);
    media=(n1+n2+n3)/3;

    if(media>=7){
        printf("Aprovado");
    }else{
        printf("Reprovado");
        }
return 0;
}