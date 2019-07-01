
def count_team_points():
    team_a = tuple(input('Enter the list of scores of Team A: '))
    i = list(team_a)
    team_b = tuple(input('Enter the corresponding list of scores of Team B: '))
    u = list(team_b)
    match = list(zip(i, u))
    a = b = c = 0
    for x, y in match:
        if x > y:
            a += 3
        elif x < y:
            b += 0
        elif x == y:
            c += 1
    total_points = int(a + b + c)
    print('Team A had ', str(total_points), 'points after twenty matches!')

