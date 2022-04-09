sortedList = [
  ("Joao", "98765-4321"),
  ("Isabela", "98765-4322"),
  ("Manuel", "98765-4323"),
  ("Maria", "98765-4324"),
  ("Rafael", "98765-4325"),
]

print(sortedList)

def binarySearch(name):
  found = False
  start = 0
  end = len(sortedList) - 1
  while start <= end and not found:
    mid = (start + end) // 2
    if sortedList[mid][0] == name:
      found = True
    else:
      if name < sortedList[mid][0]:
        end = mid - 1
      else:
        start = mid + 1
  if found:
    print("O telefone do contato {} e {}".format(name, sortedList[mid][1]))
  else:
    print("Contato {} nao encontrado".format(name))

binarySearch('Maria')