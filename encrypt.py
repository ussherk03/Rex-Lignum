
def encrypt():
    import random
    import itertools
    raw = input("Enter your message: ")
    morse_code = ""
    for letter in raw:
        if letter in "ajs":
            morse_code = morse_code + "1"
        elif letter in "bkt":
            morse_code = morse_code + "2"
        elif letter in "clu":
            morse_code = morse_code + "3"
        elif letter in "dmv":
            morse_code = morse_code + "4"
        elif letter in "enw":
            morse_code = morse_code + "5"
        elif letter in "fox":
            morse_code = morse_code + "6"
        elif letter in "gpy":
            morse_code = morse_code + "7"
        elif letter in "hqz":
            morse_code = morse_code + "8"
        elif letter in "ir":
            morse_code = morse_code + "9"
        else:
            morse_code = morse_code + "@@#**/+"
    print(morse_code)
    alts = list(itertools.permutations(morse_code, len(morse_code)))
    random_choices = list(random.choices(alts))
    print(random_choices)

encrypt()
