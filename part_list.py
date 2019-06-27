import itertools

def part_list(array):
    c = list(itertools.permutations(array))
    return c

print(part_list(["When", "the", "oars", "stirs", "the", "waters", "and", "men", "of", "war", "charge", "with", "a", "roar"]))