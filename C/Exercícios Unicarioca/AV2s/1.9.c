#include<stdio.h>>

main(){

  int num,QP=0,QN=0;

  do{
    printf("\n Entre com o numero: ");scanf("%d", &num);

    if(num>0)
    QP++;
    else
    QN++;
  }while(num>=0);

  printf(" \n Quantidade de positivos %d", QP);
  printf("\n Quantidade de nulos   : %d",QN);
}