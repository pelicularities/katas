def nb_year(p0, percent, aug, p):
    year = 0
    pop = p0
    while pop < p:
        pop += int(pop * percent / 100 + aug)
        year += 1
    return year


nb_year(1000, 2.0, 50, 1214)
