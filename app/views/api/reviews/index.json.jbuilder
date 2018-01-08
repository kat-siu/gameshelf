# @reviews.each do |review|
#   json.set! review.id do
#     json.partial! 'review', review: review
#   end
# end

@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :body, :rating
    json.name review.user.name
    json.user_id review.user.id
    json.created_at review.created_at
  end
end
