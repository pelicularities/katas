require 'pry-byebug'

def narcissistic?(value)
  digits = value.to_s.chars.map { |digit| digit.to_i }
  sum = 0
  digits.each { |digit| sum += digit**digits.count }
  value == sum
end

puts narcissistic?(370)
puts narcissistic?(371)