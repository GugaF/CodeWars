# https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/python
# Python - 7 Kyu - Vowel Count

# Return the number (count) of vowels in the given string.
# We will consider a, e, i, o, u as vowels for this Kata (but not y).
# The input string will only consist of lower case letters and/or spaces.


def get_count(sentence):
    return sum((char in 'aeiou' for char in sentence))

print(get_count("aeiou"), 5)
print(get_count("y"), 0)
print(get_count("bcdfghjklmnpqrstvwxz y"), 0)
print(get_count(""), 0)
print(get_count("abracadabra"), 5)