def height_at_time(t, v0)
  # t is given in seconds, so we have to convert it to 0.1s
  t /= 10.0
  g = 9.81
  v0 * t - 0.5 * g * t * t
end

def max_ball(v0)
  # convert v0 from km/h to m/s
  v0 = v0 * 1000 / 3600

  # initialize array to hold heights at time t
  heights = []

  # time starts counting from 0, each increment is 1/10th of a second
  t = 0

  # populate array of heights until ball hits the ground
  until height_at_time(t, v0) < 0
    heights << [t, height_at_time(t, v0)]
    t += 1
  end

  heights.max_by { |h| h[1] }[0]
end

puts max_ball(45)
puts max_ball(85)
