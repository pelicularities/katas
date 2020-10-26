def horiz_movement(stair, car)
  if stair > car
    ['R', stair - car]
  elsif stair < car
    ['L', car - stair]
  else
    nil
  end
end

def vert_movement(carpark, floor, car)
  moves = 0
  while carpark[floor][car] == 1
    moves += 1
    floor += 1
  end
  ['D', moves]
end

def escape(carpark)
  # Code here
  # find current_floor and car_position
  current_floor = carpark.find_index(carpark.select { |floor| floor.include?(2) }.flatten)
  car_position = carpark[current_floor].find_index(2)
  last_floor = carpark.length - 1
  moves = []

  until current_floor == last_floor
    staircase = carpark[current_floor].find_index(1)
    horiz = horiz_movement(staircase, car_position)
    moves << "#{horiz[0]}#{horiz[1]}" unless horiz.nil?
    car_position = staircase
    vert = vert_movement(carpark, current_floor, car_position)
    moves << "#{vert[0]}#{vert[1]}"
    current_floor += vert[1]
  end
  exit = carpark[current_floor].length - 1
  horiz = horiz_movement(exit, car_position)
  moves << "#{horiz[0]}#{horiz[1]}" unless horiz.nil?
  moves
end

carpark = [[1, 0, 0, 0, 2],
           [0, 0, 0, 0, 0]]
p escape(carpark)
