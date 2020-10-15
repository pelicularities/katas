# Enter your code here. Read input from STDIN. Print output to STDOUT

# Input format:
# (Int) n = number of entries in phone book
# (str) name phone_number
# ... repeated n times
# (str) name
# ... repeated until end of input

# get number of entries in phone book
n = gets.chomp.to_i

# populate phone book
phone_book = {}
n.times do
    input = gets.chomp
    puts "you entered #{input}"
    entry = input.split(' ')
    p entry
    # entry[0] is name, entry[1] is phone number
    phone_book[entry[0]] = entry[1]
    p phone_book
end

# get names to look up until end of input
loop do
    name = gets

    # stop execution if there is no input
    break if name.nil?

    # remove newline at end of name
    name.chomp!

    # for debugging sanity
    break if name.empty?

    # look up the name in the phone book
    if phone_book[name].nil?
        puts "Not found"
    else
        puts "#{name}=#{phone_book[name]}"
    end
end