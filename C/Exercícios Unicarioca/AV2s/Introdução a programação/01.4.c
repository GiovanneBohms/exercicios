#include <stdio.h>

main(){
  int mat, total=0, totalaprov=0,totalrepro=0;
  float Nota1,Nota2,Nota3,Media;

  do{
      printf(" Matricula: "); scanf("%d",&mat);
      printf("\n Nota1     :");scanf("%f",&Nota1);
      printf("\n Nota2     :");scanf("%f",&Nota2);
      printf("\n Nota3     :");scanf("%f",&Nota3);

      Media =((2*Nota1)+(3*Nota2)+(4*Nota3))/9;
      if(Media>=5){
        printf("\n Matricula = %d - Media Final = %4.1f - Aprovado",mat,Media);
        totalaprov++;
      }else{
        printf("\n Matricula = %d - Media Final = %4.1f - Reprovado",mat,Media);
        totalrepro++;
      }
   }while(mat!=9999);
   total = totalaprov + totalrepro;
   printf("\n Total de Aprovado = %d",totalaprov);
   printf("\n Total de Reprovados = %d",totalrepro);
   printf("\n Total de Alunos    = %d",total);


}

// I Verdadeiro
// II Verdadeiro
// III Falso