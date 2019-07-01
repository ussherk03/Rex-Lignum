from collections import defaultdict
from collections import deque
import itertools
import operator
from collections import deque
import math
from string import *

class Student:
    def __init__(self, first, last, form, college):
        self.first = first
        self.last = last
        self.form = form
        self.college = college


    def __repr__(self):
        return self.first + ' \n' + self.last + ' \n' + self.form + ' \n' +self.college

    def student_id(self):
        return self.last + ' ' + self.first

    def student_form(self):
        return self.form

    def is_basketball_elite(self):
        if self.college is 'KNUST':
            return 'Always a BLACK MAMBAN...'
        elif self.college is 'UG':
            return "Don't Underestimate them at all."
        elif self.college is 'UCC':
            return 'Outta college area. Marshal University kicked their butt last UPAC season.'

    def full_name(self):
        return self.first + ' ' +self.last



Old_Student1 = Student('John', 'Tetteh', '200', 'KNUST')
Old_Student2 = Student('Kingsley', 'Ussher', '100', 'UG')
print(Old_Student2)


































# data = ["Griselda 'La Madrina' Blanco", 'Irmagrade Ilse Ilde Grese', 'Elizabeth Bathory', 'Mary Tudor']
# L = [('Colombia', 'Medellin'), ('Germany', 'Ravensbrück'), ('Hungary', 'Nyirbator'), ('England', 'Greenwich')]
# spout = [1, 2, 3, 4, 23]
# pink = 'Ussher Kingsley'
# hand = [1, 2, 3, 4]
# toes = [(2, 2), (5, 4,), (4,7)]
#
# ax = []
# singleton = 'Metallica', 'KISS', 'Led Zeppelin', 'The Who', 'Rolling Stones', 'Queen'
# list_2 = list(itertools.chain(data, singleton, hand, toes))
#
# x = 1
# x_ = " The satellite on its Mars course is out of control."
# r = 'There two major types of elephants in the world: the African Elephant and the Asian elephant!'































































































# d = [(i*2) for i in range(1, 25) if i % 3 ]
# a = set(itertools.filterfalse(lambda i: i % 2, range(1, 25)))
# b =set(itertools.filterfalse(lambda u: u % 2, d))

# a =  (('Bruce Wayne', 'Batman'), ('Clark Kent', 'Superman'),
#       ('Tony Stark', 'Iron-Man'), ('Steve Rogers', 'Captain America'),
#       ('Wade', 'Deadpool'), ('Oliver Queen','Green Arrow'),
#       )
#
# b = [('Bruce Wayne', 'Batman'), ('Clark Kent', 'Superman'),
#       ('Tony Stark', 'Iron-Man'), ('Steve Rogers', 'Captain America'),
#       ('Wade', 'Deadpool'), ('Oliver Queen','Green Arrow'),
# ]

# c = input('Enter a string: ')
# d = 1234.565499
# e = [1, 3, 343, 125, -111, -233, 100]
# f =  ['Ussher', 'Kingsley', 'Owen']
# g = 'Billy Bayou has big blue eyes!'



# i = '324'
# a = iter(i)
# x =[]
# for e in a:
#     x.append(int(e))
# print(x)
#
# print(i[-1:])
# print(i[0:-1])
#



'''print(match)
print('')
pair = [row[i]for row in match for i in range(1)]
marx = [[column[x]for column in match] for x in range(2)]
print(pair)
print('')
print(m)'''


# The mathematical constant Tau, T is equal to the circumference of a circle (2 * pi).
# **This means pi = 6.283185307179586 / 2
# ** pi ==  3.141592653589793
# ** This is the true value of pi and (Hahaa!) it doesn't continue to the end of the world, dude.








