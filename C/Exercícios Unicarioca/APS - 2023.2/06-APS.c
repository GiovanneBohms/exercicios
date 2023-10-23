#include<stdio.h>
main()
{
  int idade,qidosos=0,qeleitores=0,smotoristas=0;
  printf("\n Digite a idade: "); scanf("%d",&idade);
  while(idade!=0){
  	if(idade>=65)
  	  qidosos++;
  	if(idade>=16)
	  qeleitores++;  
		if(idade>=18)
	  smotoristas=smotoristas+idade;
		printf("\n Digite a idade: "); scanf("%d",&idade);  
  }	
    printf("\n Quantidade de idosos: %d ",qidosos);
		printf("\n Quantidade de eleitores: %d ",qeleitores);
    printf("\n Soma das idades da pessoas aptas a dirigir: %d",smotoristas); 	
}
