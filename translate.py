

def translate():
    phrase = input("Enter a phrase: ")
    translation = ""
    for letter in phrase:
        if letter.lower() in "aeiou" or letter.upper() in "AEIOU":
            translation = translation + "g"
        else:
            translation = translation + letter
    return translation

print(translate())
