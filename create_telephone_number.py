#A function that makes a telephone number from a list of integers

def telefonnummer(list_of_int):
    t = 0
    list_of_int.insert(t, '(')
    t += 4
    list_of_int.insert(t, ')-')
    t += 4
    list_of_int.insert(t, '-')

    print(''.join([str(u) for u in list_of_int]))

telefonnummer([0,1,2,3,4,5,6,7,8,9])
