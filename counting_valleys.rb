def countingValleys(steps, path)
    # Write your code here
    # iterate over path. instead of D and U,
    # let's generate an array of
    # M (mountains), V (valleys) and S (sea level).

    alt = 0  # altitude counter
    alt_path = path.chars.map do |step|
        case step
        when 'D'
            alt -= 1
        when 'U'
            alt += 1
        end
        if alt.zero?
            'S'
        elsif alt.positive?
            'M'
        else
            'V'
        end
    end.join  # join back into a string for regexing

    puts alt_path

    # this is an unusual step: I am duplicating
    # every instance of S in the string.
    # this is to allow 'SVSVS' sequences to be counted
    # using Regex, without backreferences or resetting indices
    # by converting them to 'SSVSSVS'.

    alt_path.gsub!(/S/, 'SS')

    # next step is to add S to the beginning and end of the path
    # to capture valleys that start and end the path as well.
    alt_path = "S#{alt_path}$"

    # now every valley has the pattern /SV+S/.
    valley = /SV+S/
    alt_path.scan(valley).count
end

puts countingValleys(12, 'DDUUDDUDUUUD')
