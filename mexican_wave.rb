require 'pry-byebug'

def wave(str)
  waves = [];
  str.chars.each_index do |index|
    next if str[index] == ' '

    placeholder = str.downcase
    placeholder[index] = placeholder[index].upcase
    waves << placeholder
  end
  waves
end


result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
puts wave("hello")

result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
puts wave("codewars")

result = []
puts wave("")

result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
puts wave("two words")

result = [" Gap ", " gAp ", " gaP "]
puts wave(" gap ")