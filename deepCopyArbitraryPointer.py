#deepCopyArbitraryPointer
# def deep_copy_arbitrary_pointer(head):
#     if head is None:
#         return None
#     current = head
#     while current is not None:
#         new_node = Node(current.data)
#         new_node.next = current.next
#         current.next = new_node
#         current = new_node.next
#     return head



def deep_copy_arbitrary_pointer(head):
    class Node:
        def __init__(self,data):
            self.data = data
            self.next = None
            self.arbitrary = None
    
    if head is None:
        return None

    current = head

    #first, create a new linked list equivalent to the original linked list
    while current is not None:
        new_node = Node(current.data)
        # new_node.next = current.next
        current.next = new_node
        current = new_node.next

    current = head
    while current is not None:
        current.arbitrary = current.next.next
        current = current.next.next

    current = head
    while current is not None:
        current.next.next = current.arbitrary
        current = current.next.next

    return head.next



