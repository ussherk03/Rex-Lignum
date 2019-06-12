
def DNA_strand(dna):
    i = []
    #append each complementary base to the null list
    for nucleotide in dna:
        if nucleotide == 'A':
            i.append('T')
        elif nucleotide == 'T':
            i.append('A')
        elif nucleotide == 'C':
            i.append('G')
        elif nucleotide == 'G':
            i.append('C')

    complementary_strand = ''.join(x)
    return complementary_strand

print(DNA_strand('AGGGGGTCCCCGTCGTCGTGTGAAAAAAGGTTCCCT'))

