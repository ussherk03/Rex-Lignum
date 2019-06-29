#Eliminate every string and leave the integers

mixed_up = ['Charlize', 'Tanya', 'Jonas', 'Robert', 22, 15, 'Charlize']

def filter_list(iterable):
    strings = []
    integers = []
    for element in iterable:
        strings.append(str(element))
    for item in iterable:
        if item.isnumeric():
            integers.append(int(item))
    return integers

print(filter_list(mixed_up))