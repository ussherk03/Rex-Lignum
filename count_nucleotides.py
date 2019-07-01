
# Count the total number of four different bases and make a readable
# conclusion(dictionaries are suitable. Tuples are not exceptions.

def count_nucleotides(dna):
    n_base = [['A', 0], ['C', 0], ['T', 0], ['G', 0]]
    for base in dna:
        if base == 'A':
            n_base[0][1] += 1
        elif base[0] == 'C':
            n_base[1][1] += 1
        elif base[0] == 'T':
            n_base[2][1] += 1
        elif base[0] == 'G':
            n_base[3][1] += 1

    print(dict(n_base))

count_nucleotides('AAAACGCGCGTTTAGTCAGTCACCACACTTGAGCATT')