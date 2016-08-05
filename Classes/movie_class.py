#wiley's fun lil movie geek code

import random

class Movie():

	def __init__(self, name, number_of_stars, budget, box_office, famous_actors, length, genre, songs):
		self.name = name
		self.number_of_stars = number_of_stars
		self.budget = budget
		self.famous_actors = famous_actors
		self.length = length
		self.genre = genre
		self.songs = songs
		self.box_office = box_office


	def calculate_profit(self):
		profit = self.box_office - self.budget
		print("Profit: " + str(profit))

	def opening_credits(self):
		print(self.name + " Cast")
		print(self.famous_actors)

	def soundtrack(self):
		print(self.songs)

	def smooch(self):
		print("Woah! " + str(self.famous_actors[random.randint(0, len(self.famous_actors) - 1)]) + " and " + str(self.famous_actors[random.randint(0,len(self.famous_actors) - 1)]) + " just shared an onscreen kiss!! *sparks fly*")

	def boom(self):
		if self.genre == "action":
			print("BOOM. *popcorn flies*")
		else: 
			print("This isn't an action movie.")

	def stats(self):
		print(self.name)
		print("Rating: " + str(self.number_of_stars) + " stars out of ten.")
		print("Budget: " + str(self.budget))
		print("Cast: " + str(self.famous_actors))
		print("Length of movie: " + self.length)
		print("Genre: " + self.genre)
		print("Box office: " + str(self.box_office))

civil_war = Movie("Captain America: Civil War", 9, 250000000, 1132000000, ["Chris Evans", "Sebastian Stan", "Anthony Mackie", "Robert Downey Jr.", "Elizabeth Olsen", "Scarlett Johansson", "Paul Rudd", "Emily VanCamp", "Chadwick Boseman"], "2 hours, 27 minutes", "action", ["Left Hand Free - altj"])

gotg = Movie("Guardians of the Galaxy", 9.1, 170000000, 773300000, ["Chris Pratt", "Zoe Saldana", "Lee Pace", "Bradley Cooper", "Vin Diesel", "Dave Bautista", "Karen Gillan"], "2 hours, 2 minutes", "action", ["Ain't No Mountain High Enough - Marvin Gaye and Tammi Terrell", "I Want You Back - Jackson 5", "Cherry Bomb - The Runaways"])

pitch_perfect = Movie("Pitch Perfect", 8, 17000000, 115400000, ["Anna Kendrick", "Brittany Snow", "Anna Camp", "Rebel Wilson", "Skylar Astin"], "1 hour, 52 minutes", "comedy", ["Cups - Anna Kendrick", "Don't Stop the Music - The Trebletones", "Since U Been Gone - Cast"])

movies = []

movies.append(civil_war)
movies.append(gotg)
movies.append(pitch_perfect)

for movie in movies:
	movie.stats()
	movie.calculate_profit()
	movie.opening_credits()
	movie.soundtrack()
	movie.smooch()
	movie.boom()
	print("")

