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



def check(x , y):
    if  x[-2:] == y[-2:]:
        print('They both end with "-{}"'.format(x[-2:]))

    else:
        print('"-{}" and "-{}" are both different endings.'.format(x[-2:], y[-2:]))

check('Ronaldinho', 'Ronaldo')
check('Isis', 'Persis')

def exchange_rate():
    question = input('Exchange_Rate: Convert to GHS or USD\nEnter C or D respectively: ')
    if question == 'D':
        c = 4.89
        a = float(input('Enter the amount in cedis: '))
        b = a / c
        print('Your money is USD' + str(b))
    elif question == 'C':
        d = 4.98
        x = float(input('Enter the amount in dollars: '))
        y = x * d
        print('Your money is equivalent to GHS' + str(y))

    else:
        pass

exchange_rate()

def count():
    team_a = tuple(input('Enter the list of scores of Team A: '))
    i = list(team_a)
    team_b = tuple(input('Enter the corresponding list of scores of Team B: '))
    u = list(team_b)
    match = list(zip(i, u))
    a = b = c = 0
    for x, y in match:
        if x > y:
            a += 3
        elif x < y:
            b += 0
        elif x == y:
            c += 1
    total_points = int(a + b + c)
    print('Team A had ', str(total_points), 'points after twenty matches!')


def DNA_strand(dna):
    i = []
    #append each complementary base to the null list
    for nucleotide in dna:
        if nucleotide == 'A':
            i.append('T')
        elif nucleotide == 'T':
            i.append('A')
        elif nucleotide == 'C':
            i.append('G')
        elif nucleotide == 'G':
            i.append('C')

    complementary_strand = ''.join(x)
    return complementary_strand

print(DNA_strand('AGGGGGTCCCCGTCGTCGTGTGAAAAAAGGTTCCCT'))
mixed_up = ['Voldemort', 'Blanco', 'Severus', 'Tudor', 22, 15, 'Voldemort']

def filter_list(iterable): #Eliminate every string and leave the integers
    strings = []
    integers = []
    for element in iterable:
        strings.append(str(element))
    for item in iterable:
        if item.isnumeric():
            integers.append(int(item))
    return integers

print(filter_list(mixed_up))

def filter_out_integers(catalog):
    string_ = [str(x) for x in catalog]
    integer_ = [int(y) for y in string_ if y.isnumeric()]

    return integer_

print(filter_out_integers(mixed_up))

def kick_out_all_strings(catalogue):
    return [int(entity) for entity in list(itertools.filterfalse(lambda x:x.isalpha(), sorted([str(y) for y in catalogue])))]

print(kick_out_all_strings(mixed_up))

numbers = [0,1,2,3,4,5,6,7,8,9]

def telefonnummer(iterable): #A function that makes a telephone contact from an array of integers
    t = 0
    iterable.insert(t, '(')
    t += 4
    iterable.insert(t, ')-')
    t += 4
    iterable.insert(t, '-')

    print(''.join([str(u) for u in iterable]))

telefonnummer(numbers)

def kill_vowels(string): # making a contact from an array of integers
    vowels = 'AEIOUaeiou'
    harmless = ''
    unfit = ''
    for letter in string:
        if letter in vowels:
            unfit = unfit + letter
        else:
            harmless = harmless + letter
    print(harmless)

kill_vowels('Shu your beak!')

a = input('Enter a string: ')
b = c = 0
for x in a:
    if a.isalpha():
       b += 1
    elif a.isnumeric():
       c += 1
print('LETTERS --->', b, '\n NUMBERS --->', c)

def count_nucleotides(dna):
    n_base = [['A', 0], ['C', 0], ['T', 0], ['G', 0]] # There are four bases in a nucleotides: A,C,T,G
    for base in dna:
        if base == 'A':
            n_base[0][1] += 1
        elif base[0] == 'C':
            n_base[1][1] += 1
        elif base[0] == 'T':
            n_base[2][1] += 1
        elif base[0] == 'G':
            n_base[3][1] += 1

    print(dict(n_base))

count_nucleotides('AAAACGCGCGTTTAGTCAGTCACCACACTTGAGCATT')

























































































































































# /#




























