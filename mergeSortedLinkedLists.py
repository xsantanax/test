#merge sorted linked lists
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