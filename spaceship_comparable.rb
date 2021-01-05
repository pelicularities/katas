class Player
  # include Comparable
  attr_accessor :name, :score
  def initialize(attributes)
    @name = attributes[:name]
    @score = attributes[:score]
  end

  def <=>(other_player)
    score <=> other_player.score
  end
end

player1 = Player.new(name: 'Alice', score: 1000)
player2 = Player.new(name: 'Bob', score: 3000)
player3 = Player.new(name: 'Charlie', score: 2000)
player4 = Player.new(name: 'Eve', score: 2000)

players = [player1, player2, player3]

puts player3 == player4
