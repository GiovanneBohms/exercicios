#include <stdio.h>

int main(){
    float desconto=0.1,vendas,calculo;

    printf("Digite o valor gasto na loja\n");
    scanf("%f",&vendas);

    calculo = vendas*(1-desconto);

    if(vendas>1000){
        printf("Voce recebeu um desconto de 10%%\nVoce pagara %.2f\n",calculo);
    }else{ printf("Voce ira pagar %.2f\n",vendas);};
    return 0;
}