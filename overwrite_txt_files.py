import os

### Overwriting the content of a collections of text files ###

def overwrite_text_files():
    os.chdir('/Users/ASPIRE/Desktop/testfiles')

    for f in os.listdir():
        print(f)
        with open(f, 'w') as new:
            new.write('girl')

### Overwriting the content of a collections of text files ###
