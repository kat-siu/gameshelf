json.partial! 'api/reviews/review', review: @review

json.name @review.user.name
json.user_id @review.user.id
json.created_at @review.created_at
