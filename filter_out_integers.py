#Eliminate every integers and leave rest

mixed_up = ['Charlize', 'Tanya', 'Jonas', 'Robert', 22, 15, 'Charlize']


def filter_out_integers(catalog):
    string_ = [str(x) for x in catalog]
    integer_ = [int(y) for y in string_ if y.isnumeric()]

    return integer_

print(filter_out_integers(mixed_up))