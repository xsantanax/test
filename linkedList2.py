class Node:
    def __init__(self, data):
        self.data=data
        self.next=None

class LinkedList:
    def __init__(self):
        self.head=None

    def append(self,data):
        if self.head is None:
            self.head=Node(data)
        else:
            itr=self.head
            while itr.next is not None:
                itr=itr.next
            itr.next = Node(data)

    def printList(self):
        itr=self.head
        while itr is not None:
            print(itr.data)
            itr=itr.next



myLinkedList = LinkedList()

myLinkedList.append(1)
myLinkedList.append(2)
myLinkedList.append(3)

myLinkedList.printList()
