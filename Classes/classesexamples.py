

class Band_Member():

	def __init__(self, name, band_name, eye_color, instrument, age, swoon_worthy):
		self.name = name
		self.band_name = band_name
		self.eye_color = eye_color
		self.instrument = instrument
		self.age = age
		self.swoon_worthy = swoon_worthy

	def sing(self):
		print("Na na na na na na na na na")
	def gets_older(self):
		self.age += 1
		print(self.age)
	def learns_new_instrument(self, para_instrument):
		self.instrument = para_instrument
	def is_swoon_worthy(self):
		if self.eye_color == "green" and self.swoon_worthy == True:
			print("Hunkahunka")
			print("Babelicious")
		else:
			print("Meh.")

harry = Band_Member("Harry Edward Styles", "One Direction", "green", "voice", 22, True)

louis = Band_Member("Louis Tomlinson", "One Direction", "blue", "piano", 24, True)

one_direction = []
one_direction.append(harry)
one_direction.append(louis)


#iterating thru list

for member in one_direction:
	print(member.name)
	print(member.band_name)
	member.sing()
	member.is_swoon_worthy()