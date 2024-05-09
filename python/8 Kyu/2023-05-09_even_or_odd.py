# https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/python
# Python - 8 Kyu - Even or Odd

# Create a function that takes an integer as an argument and returns "Even" for 
# even numbers or "Odd" for odd numbers.

def even_or_odd(number):
    return "Even" if number % 2 == 0 else "Odd"


print(even_or_odd(1), "Odd")
print(even_or_odd(2), "Even")
print(even_or_odd(-1), "Odd")
print(even_or_odd(-2), "Even")
print(even_or_odd(0), "Even")