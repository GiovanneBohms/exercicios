#include<stdio.h>

main()

{
int ID,MENOR;
printf("\n Entre com a idade: "); scanf("%d",&ID);
MENOR = ID; //EXPRESSÃO 1;
while( ID != 0 ){ //EXPRESSÃO2 

if (ID < MENOR) //EXPRESSÃO3

MENOR=ID;

printf("\n Entre com a idade: "); scanf("%d",&ID);

}

printf("\n\n Menor idade = %d",MENOR);

}