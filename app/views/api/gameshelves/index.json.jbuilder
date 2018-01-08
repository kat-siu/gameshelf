@gameshelves.each do |gameshelf|
  json.set! gameshelf.id do
    json.partial! 'gameshelf', gameshelf: gameshelf
  end
end
