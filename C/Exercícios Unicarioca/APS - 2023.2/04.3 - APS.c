#include <stdio.h>

main(){
int RESP, num;
scanf("%d",&num);
  RESP = (num < 0) ? - num : num;

  printf("%d",RESP);
}