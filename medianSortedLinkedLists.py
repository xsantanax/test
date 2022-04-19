#merge two sorted linked lists into one sorted linked list
def mergeSortedLinkedLists(head1, head2):
    if head1 is None:
        return head2
    if head2 is None:
        return head1
    if head1.data < head2.data:
        head1.next = mergeSortedLinkedLists(head1.next, head2)
        return head1
    else:
        head2.next = mergeSortedLinkedLists(head1, head2.next)
        return head2

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None


