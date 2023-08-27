#include <stdio.h>

main(){
    float IPI,valorTotal,valorPeca1,valorPeca2;
    char codigoPeca1[50],codigoPeca2[50];
    int qntPeca1,qntPeca2;

    printf("digite IPI em decimal exep: 0.10 \n");
    scanf("%f",&IPI);
    printf("Digite o nome ou codigo da primeira peca: \n");
    scanf("%s", &codigoPeca1);
    printf("Digite o preco de %s\n", codigoPeca1);
    scanf("%f",&valorPeca1);
    printf("Digite a quantidade de %s que esta comprando \n",codigoPeca1);
    scanf("%d", &qntPeca1);

    printf("Digite o nome ou codigo da segunda peca: \n");
    scanf("%s", &codigoPeca2);
    printf("Digite o preco de %s\n", codigoPeca2);
    scanf("%f",&valorPeca2);
    printf("Digite a quantidade de %s que esta comprando \n",codigoPeca2);
    scanf("%d", &qntPeca2);

     valorTotal = (valorPeca1*qntPeca1+valorPeca2*qntPeca2)*(IPI/100+1);

    printf("Voce comprou:\n \n");
    printf("Item %s Preco %.2f Quantidade %d \n",codigoPeca1,valorPeca1, qntPeca1);
    printf("Item %s Preco %.2f Quantidade %d \n",codigoPeca2,valorPeca2, qntPeca2);
    printf("Valor total foi de R$: %.2f \n",valorTotal);

}