print "Type first number: "
a = gets.chomp.to_i

print "Type second number: "
b = gets.chomp.to_i

case a <=> b
when -1
  puts "#{a} is smaller than #{b}!"
when 1
  puts "#{a} is larger than #{b}!"
when 0
  puts "#{a} is equal to #{b}!"
end
