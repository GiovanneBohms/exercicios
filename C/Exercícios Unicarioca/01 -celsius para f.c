#include <stdio.h>

main(){
    int c;
    float fi;
    printf("digite a temperatura em Celsius\n");
    scanf("%d",&c);
    fi=((9.0/5.0)*c)+32;
    printf("%.0f",fi);
}