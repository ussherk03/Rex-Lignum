
#Kick out only second element in every array
arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11],
    [12, 13, 14],
]


def remove_elements(array):
    for catalog in array:
        catalog.pop(1)
    print(arr)

remove_elements(arr)