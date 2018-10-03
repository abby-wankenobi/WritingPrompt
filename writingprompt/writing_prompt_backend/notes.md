Reset database:
1. heroku restart; heroku pg:reset DATABASE --confirm wp-backend; heroku run rake db:migrate
2. Heroku console, run rails db:seed
