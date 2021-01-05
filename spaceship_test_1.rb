print "Type first number: "
a = gets.chomp.to_i

print "Type second number: "
b = gets.chomp.to_i

if a < b
  puts "#{a} is smaller than #{b}!"
elsif a > b
  puts "#{a} is larger than #{b}!"
else
  puts "#{a} is equal to #{b}!"
end
