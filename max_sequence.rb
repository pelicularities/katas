require 'pry-byebug'

def max_sequence(arr)
  return 0 if arr.select { |x| x.positive? }.empty?

  max = 0
  lengths = (1..arr.count).to_a
  lengths.each do |length|
    starts = (0..(arr.count - length)).to_a
    starts.each do |start|
      current_sum = arr.slice(start, length).reduce(:+)
      max = current_sum if current_sum > max
    end
  end
  max
end

puts 'This should return 0'
puts max_sequence([])
puts 'This should return 6'
puts max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
puts 'This should return 11'
puts max_sequence([11])
puts 'This should return 0'
puts max_sequence([-32])
puts 'This should return 12'
puts max_sequence([-2, 1, -7, 4, -10, 2, 1, 5, 4])
