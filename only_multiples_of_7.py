#A function that returns all multiples of 7 present in x

def multiples_7(x):
    cup = []
    while len(x) > 2:
        b = x[-1:]  #returns the last member of the string
        c = x[0:-1] #returns all members bar the last member
        robot = int(c) - (2 * int(b))
        x = str(robot)
        cup.append(robot)
    cup.append(7)
    print(list(reversed(cup)))

multiples_7('699993')
multiples_7('371')
multiples_7('7')