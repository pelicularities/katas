require 'pry-byebug'

def sum_pairs(ints, s)
  # loop through ints, current element as int1
  # slice the int array and loop through the remainder of ints
  # current element of inner loop as int2
  # if int1 + int2 = s, save indices (first pair found is not necessarily first complete pair)
  # if we reach the end of the method without finding a pair, return nil
  indices = [0, ints.count]
  ints.each_with_index do |int1, index1|
    puts "int1 is #{int1}, index1 is #{index1}"
    ints[index1 + 1, ints.count - 1].each_with_index do |int2, index2|
      puts "int2 is #{int2}, index2 is #{index2}"
      if int1 + int2 == s && indices[1] > index2 + index1 + 1
        puts "int1 #{int1} and int2 #{int2} make #{s}"
        puts "previous indices[0] was #{indices[0]}"
        indices[0] = index1
        puts "indices[0] is now #{indices[0]}"
        puts "previous indices[1] was #{indices[1]}"
        indices[1] = index2 + index1 + 1
        puts "indices[1] is now #{indices[1]}"
      end
    end
  end
  indices[1] == ints.count ? nil : [ints[indices[0]], ints[indices[1]]]
end

l4= [1, 2, 3, 4, 1, 0]
puts sum_pairs(l4, 2)