
## Guess password ##

def guess_password():
    password = "reddington234"
    guess = ""
    count = 0
    tries = 3
    out_of_tries= False

    while guess != password and not out_of_tries:
        if count < tries:
            guess = input("Enter the secret code:")
            count += 1 #if guess is incorrect then 'count' increases by 1
        else:
            out_of_tries = True

    if out_of_tries:
        print("Access denied for 3 hours")
    else:
        print("Welcome")

### Guess password ###