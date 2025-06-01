# Reset the counter every time i reach a "1 digit"
# EXAMPLE
# input :10001001000001   output should be 5
# basicly it counts the most amount of zeros in a row and that should be the output
# if the input is 0001001 it will ignore the first zeros and count the zeros from 1 


def solution (N):
    N=bin(N) [2:]
    b=0
    maxb=0
    for k in N:
        if int(k) ==0 :
            b+=1
        elif int(k) ==1:
            maxb=max (b, maxb)
            b=0
    return maxb

