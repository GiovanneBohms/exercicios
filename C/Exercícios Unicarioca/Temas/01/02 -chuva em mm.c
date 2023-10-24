#include <stdio.h>

main(){
    float polegada,mm;
    printf("Choveu quantas polegadas?\n");
    scanf("%f",&polegada);
    mm=polegada*25.4;
    printf("A chuva em mm foi: %.1f mm",mm);


}