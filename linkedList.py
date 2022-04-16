class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        if self.head is None:
            self.head = Node(data)
        else:
            current = self.head
            while current.next is not None:
                current = current.next
            current.next = Node(data)

    def prepend(self, data):
        if self.head is None:
            self.head = Node(data)
        else:
            new_node = Node(data)
            new_node.next = self.head
            self.head = new_node

    def insert(self, data, index):
        if index == 0:
            self.prepend(data)
        else:
            current = self.head
            for i in range(index - 1):
                current = current.next
            new_node = Node(data)
            new_node.next = current.next
            current.next = new_node

    def remove(self, index):
        if index == 0:
            self.head = self.head.next
        else:
            current = self.head
            for i in range(index - 1):
                current = current.next
            current.next = current.next.next

    def get(self, index):
        if index == 0:
            return self.head.data
        else:
            current = self.head
            for i in range(index):
                current = current.next
            return current.data

    def size(self):
        current = self.head
        count = 0
        while current is not None:
            count += 1
            current = current.next
        return count

    def is_empty(self):
        return self.head is None

    def clear(self):
        self.head = None

    def index(self, data):
        current = self.head
        index = 0
        while current is not None:
            if current.data == data:
                return index
            current = current.next
            index += 1
        return -1
    

    def __iter__(self):
        current = self.head
        while current is not None:
            yield current.data
            current = current.next

    def __getitem__(self, index):
        if index < 0:
            index = self.size() + index
        current = self.head
        for i in range(index):
            current = current.next
        return current.data

    def __setitem__(self, index, data):
        if index < 0:
            index = self.size() + index
        current = self.head
        for i in range(index):
            current = current.next
        current.data = data 

    def __contains__(self, data):
        return self.index(data) != -1

    def __add__(self, other):
        if isinstance(other, LinkedList):
            current = self.head
            while current.next is not None:
                current = current.next
            current.next = other.head
            return self
        else:
            raise TypeError('other must be a LinkedList')




