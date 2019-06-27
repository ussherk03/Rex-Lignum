
def maskify(card_number):  #hides all numbers bar the last 4 numbers of the card's number
    a = str(card_number)
    b = ''.join(a)
    c = b[0:-4]
    d = b[-4:]
    mask = ''
    for i in range(len(c)):
        mask = mask + '#'
    print(mask + d)

maskify(1232324334333555)