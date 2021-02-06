def zero(argument = nil)
  argument.nil? ? 0 : argument.call(0)
end
def one(argument = nil)
  argument.nil? ? 1 : argument.call(1)
end
def two(argument = nil)
  argument.nil? ? 2 : argument.call(2)
end
def three(argument = nil)
  argument.nil? ? 3 : argument.call(3)
end
def four(argument = nil)
  argument.nil? ? 4 : argument.call(4)
end
def five(argument = nil)
  argument.nil? ? 5 : argument.call(5)
end
def six(argument = nil)
  argument.nil? ? 6 : argument.call(6)
end
def seven(argument = nil)
  argument.nil? ? 7 : argument.call(7)
end
def eight(argument = nil)
  argument.nil? ? 8 : argument.call(8)
end
def nine(argument = nil)
  argument.nil? ? 9 : argument.call(9)
end
def plus(x)
  return Proc.new { |y| y + x }
end
def minus(x)
  return Proc.new { |y| y - x }
end
def times(x)
  return Proc.new { |y| y * x }
end
def divided_by(x)
  return Proc.new { |y| y / x }
end

puts 'this should be 35'
puts seven(times(five()))
puts 'this should be 13'
puts four(plus(nine()))
puts 'this should be 5'
puts eight(minus(three()))
puts 'this should be 3'
puts six(divided_by(two()))
puts 'this should be 2'
puts eight(divided_by(three()))
