
# Make online trolls less sensitive by eliminating vowels#

def kill_vowels(string):
    vowels = 'AEIOUaeiou'
    harmless = ''
    unfit = ''
    for letter in string:
        if letter in vowels:
            unfit = unfit + letter
        else:
            harmless = harmless + letter
    print(harmless)

kill_vowels('Shut your beak!')