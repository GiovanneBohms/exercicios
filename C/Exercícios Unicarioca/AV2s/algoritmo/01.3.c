#include <stdio.h>

main(){
 int j,x;
 j=5;
 x=2;
 do{
  x=x+j;
  j=j+x;
 }while(j>0);
 printf("%d %d\n",x,j);
}