

def no_fives(i, j):
    j = j + 1
    catalog = list(range(i, j))
    x = list(filter(lambda a:a%5, catalog))
    print(x)
    print(len(x))

no_fives(1, 9)