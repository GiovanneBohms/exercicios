#include<stdio.h>

float calculaCotacao(float VDOLAR, float CDOLAR){
  float VREAL;
  printf("Entre com a quantidade de dolares: ");
	scanf("%f",&VDOLAR);
	printf("Entre com a cotacao do dolar     : ");
	scanf("%f",&CDOLAR);
	return VREAL = VDOLAR * CDOLAR;
}

int main(){
	float VREAL,VDOLAR,CDOLAR;
	VREAL = calculaCotacao( VDOLAR, CDOLAR);
	printf("\n Valor em Reais: %8.2f",VREAL);
  return 0;
}