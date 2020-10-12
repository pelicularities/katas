def letter_score(letter)
  letters = ('a'..'z').to_a
  letters.find_index(letter) + 1
end

def word_score(word)
  sum = 0
  word.chars.each { |letter| sum += letter_score(letter) }
  sum
end

def high(words)
  current_max = 0
  max_word = ''
  words.split(' ').each do |word|
    if word_score(word) > current_max
      current_max = word_score(word)
      max_word = word
    end
  end
  max_word
end

puts high('man i need a taxi up to ubud')
puts high('what time are we climbing up the volcano')
puts high('take me to semynak')
puts high('aaa b')
