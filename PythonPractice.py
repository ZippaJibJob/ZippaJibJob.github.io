#Python Practice Baby

#Keywords:   .isinstance()  .str()   print()  type()    \n   .title()

#List Keywords:   .items()  .insert()  .remove("listItem")    del listName [0]   len()   .reverse()   .sort()   sorted()

#For Loop:   for key, value in listName.items():
#                print(F"text {key} text (value)")



colours = ["red", "blue", "orange", "green", "purple"]
print(colours)

colours[2] = "magenta"
print(colours)

del colours[1]
print(colours)

favGames = ["BG3", "Divinity", "Rocket League", "GTA V"]
favGames.insert(2, "The Witness")
print(favGames)

favGames.sort()
print(favGames)

people = ["Roy", "Billy", "Adam", "Steve"]
people.sort(reverse=True)
print(people)

numbers = ["0", "1", "2", "3", "4", "5", "6"]

for number in numbers[2:4]:
    print(number)


a = 5
b = 3

print(a**b)