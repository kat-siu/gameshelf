@games.each do |game|
  json.set! game.title do
    json.partial! 'game', game: game
  end
end
