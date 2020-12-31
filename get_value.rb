class Hash
  def get_value( default, *args )
    value = recursive_keys(args, self)
    value.nil? ? default : value
  end

  private

  def recursive_keys(keys, hash)
    # keys is an array of the keys left to look for in the hash
    if keys.one?
      hash[keys.first]
    elsif keys.first.nil?
      nil
    else
      recursive_keys(keys[1..-1], hash[keys.first])
    end
  end
end

config = { :files => { :mode => 0x777 }, :name => "config" }

# config.get_value( 0x0, :files, :mode ) == 0x777
# config.get_value( "", :name ) == "config"
# config.get_value( 80, :port ) == 80
# config.get_value( "cfg", :files, :extension ) == "cfg"

puts "The following should return 0x777:"
puts config.get_value( 0x0, :files, :mode )

puts "The following should return config"
puts config.get_value( "", :name )

puts "The following should return 80"
puts config.get_value( 80, :port )

puts "The following should return cfg"
puts config.get_value( "cfg", :files, :extension )
