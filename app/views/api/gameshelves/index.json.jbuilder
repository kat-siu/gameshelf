@gameshelves.each do |gameshelf|
  json.set! gameshelf.id do
    json.partial! '/api/gameshelves/gameshelf', gameshelf: gameshelf
  end
end
