def prime_test(n):
    '''Testing if an integar is a prime number. More complex versions of this exist.
However, we assume that the input is an integar'''
    if n == 0:
        print("0 is not a prime number")
    elif n == 1:
        print("1 is not a prime number")
    elif n == 2:
        print("2 is a prime number")
    elif n == 3:
        print("3 is a prime number")
    else:
        for x in range(2, n - 1):
            if n%x != 0:
                print("The answer is {}".format(n%x))
            else:
                print("{} is not prime".format(n))

prime_test(0)
prime_test(1)
prime_test(2)
prime_test(3)
prime_test(4)
prime_test(5)
prime_test(9) 
            
            
