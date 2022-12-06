#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int x = get_int("x: ");
    int y = get_int("y: ");
    //int z = x + y;
    printf("%i\n", x + y);

    if(x < y)
    {
        printf("x is less than y\n");
    }
    else if(x > y)
    {
        printf("x is not less than y\n");
    }
    else
    {
        printf("x is equal y\n");
    }
}