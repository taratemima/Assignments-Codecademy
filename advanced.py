languages = ["HTML", "JavaScript", "Python", "Ruby"]
print filter(lambda l: l == "Python", languages)

squares = [x**2 for x in range(1,11)]
print filter(lambda x: x >= 30 and x <= 70, squares)

threes_and_fives = [x for x in range(1, 16) if x%3 == 0 or x%5 == 0]

garbled = "IXXX aXXmX aXXXnXoXXXXXtXhXeXXXXrX sXXXXeXcXXXrXeXt mXXeXsXXXsXaXXXXXXgXeX!XX"
message = filter(lambda x: x != 'X', garbled)
print message 