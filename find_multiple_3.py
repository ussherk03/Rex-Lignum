import itertools

def find_mult_3(num):
    string = ''.join(str(num))
    length_of_string = len(string)
    axe = []
    x = 1
    while x <= length_of_string:
        i = list(itertools.permutations(string, x))
        for iterable in i:
            axe.append(''.join(iterable))
        x +=1

    integers = [int(y) for y in axe]
    multiples_3 = list(itertools.filterfalse(lambda e:e%3, integers))
    result = []
    result[len(result):] = len(multiples_3), multiples_3[-1]
    return result

print(find_mult_3(362))
print(find_mult_3(1000))
print(find_mult_3(435))
print(find_mult_3(1023))