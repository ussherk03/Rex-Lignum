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
    #Thank You Jesus

print(find_mult_3(362))
print(find_mult_3(1000))
print(find_mult_3(435))
print(find_mult_3(1023))





















































































































































# /#




























# cat = []
# b = ''
# null = []
#print(list(itertools.filterfalse(lambda x: x%7, range(4000))))
'''def seven(a):
    string_a = str(a)
    barrel = []
    while len(string_a) > 1:
        iterator_a = iter(string_a)
#         empty = []
#         for x in iterator_a:
#             empty.append(x)
#
#         a = string_a[-1:]
#         b = string_a[0:-1]
#         result = int(b) - (2 * int(a))
#         string_a = str(result)
#         barrel.append(result)
#     print(barrel)
#
# seven(371)
#
#
# # p = 3343
# # print(str(p), ' is good')
# # q = '3333'
# #
# # print(int(q))
#
#
# # print(b.join(a[0:-1]))'''
