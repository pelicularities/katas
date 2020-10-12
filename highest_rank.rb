def highest_rank(arr)
  modes = Hash.new(0)
  arr.each do |num|
    modes[num] += 1
  end

  # find mode
  mode = modes.values.max

  possible_modes = []

  # find all keys where value equals the mode
  until modes.key(mode).nil?
    possible_modes << modes.key(mode)
    modes.delete(modes.key(mode))
  end

  possible_modes.max
end
