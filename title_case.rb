require 'pry-byebug'

def title_case(title, minor_words = '')
  words = title.split
  minors = minor_words.downcase.split
  title_cased_words = []
  words.each_with_index do |word, index|
    if (index != 0) && (minors.include? word.downcase)
      title_cased_words << word.downcase
    else
      title_cased_words << word.capitalize
    end
  end
  title_cased_words.join(' ')
end

puts title_case('')
puts title_case('a clash of KINGS', 'a an the of')
puts title_case('THE WIND IN THE WILLOWS', 'The In')
puts title_case('the quick brown fox')
