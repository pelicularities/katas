def remove_smallest(numbers)
  smallest_index = numbers.find_index(numbers.min)
  shallow_copy = numbers.clone
  shallow_copy.delete_at(smallest_index) unless smallest_index.nil?

  shallow_copy
end
