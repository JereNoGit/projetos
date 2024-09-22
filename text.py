parciais = {
    0 : 1,
    1 : 0
}

def fib(n):
    if n in parciais:
      return parciais(n)  
    parciais[n] = fib(n-1) + fib(n-2)
    return parciais[n]

print(fib(100))