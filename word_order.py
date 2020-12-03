# Enter your code here. Read input from STDIN. Print output to STDOUT
from collections import OrderedDict

# Read the number of inputs
n = int(input())

# Read the words from stdin and push to words list
words_hash = OrderedDict()
for _ in range(n):
  word = input()
  words_hash[word] = words_hash.setdefault(word, 0) + 1

# Print the total number of words
print(len(words_hash))

count = map(lambda i: str(i), words_hash.values())
print(" ".join(count))