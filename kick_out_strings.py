
#Eliminate every string and leave the integers

import itertools

mixed_up = ['Charlize', 'Tanya', 'Jonas', 'Robert', 22, 15, 'Charlize']

def kick_out_all_strings(catalogue):
    return [int(entity) for entity in list(itertools.filterfalse(lambda x:x.isalpha(), sorted([str(y) for y in catalogue])))]

print(kick_out_all_strings(mixed_up))

numbers = [0,1,2,3,4,5,6,7,8,9]