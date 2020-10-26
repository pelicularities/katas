def checkMagazine(magazine, note)
  # check if note is longer than magazine
  if note.length > magazine.length
    puts 'No'
    return false
  end

  # sort both magazine and note in place
  magazine.sort!
  note.sort!

  # iterate through note
  note.each do |word|
    # check if word from note is in magazine (case-sensitive)
    if magazine.include?(word)
      # if so, "cut" the word out from magazine
      magazine.delete_at(magazine.find_index(word))
    else
      puts 'No'
      return false
    end
  end

  # if you make it to the end of the function, return "Yes"
  puts 'Yes'
  true
end
