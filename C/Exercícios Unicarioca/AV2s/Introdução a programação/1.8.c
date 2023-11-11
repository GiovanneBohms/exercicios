#include <stdio.h>

void inicializa( int a, int *b, int c, int *d){
  printf("\n Passo 1: %d %d %d %d",a,*b,c,*d);
  a=1; *b=1; c=1;*d=1;
  printf("\n Passo 2: %d %d %d %d",a,*b,c,*d);
}

main(){
  int x,y,z,w;

  x=1;y=2;z=3;w=4;
  inicializa(x,&y,z,&w);
  printf("\n Passo 2: %d %d %d %d",x,y,z,w);
}