

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