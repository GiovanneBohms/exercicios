#include <stdio.h>

main(){

    int i=0;
    int SOMA_TOTAL=0;
    while(1){
        i++;
        SOMA_TOTAL = i+SOMA_TOTAL;
        printf("%d",i);
        if(i==1000000000){
            printf("%d", SOMA_TOTAL);
            break;
        }
    }
}
