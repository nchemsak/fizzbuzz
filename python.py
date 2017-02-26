# python solve 1
for num in range(0, 101):
    if not(num % 5) and not(num % 3):
        print ("FizzBuzz")
    elif not(num % 3):
        print ("Fizz")
    elif not(num % 5):
        print ("Buzz")
    else:
        print (num)

# python solve 2
for num in range(1,101):
    msg = ''
    if num % 3 == 0:
        msg += 'Fizz'
    if num % 5 == 0:
        msg += 'Buzz'
    print (msg or num)
