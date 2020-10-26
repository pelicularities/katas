def kangaroo(x1, v1, x2, v2)
    # did some algebra to arrive at the following formula
    jumps = (x2 - x1).fdiv(v1 - v2)
    result = jumps.positive? && (jumps % 1).zero? ? "YES" : "NO"
    puts result
end

x1 = 0
v1 = 3
x2 = 4
v2 = 2

kangaroo(x1, v1, x2, v2)