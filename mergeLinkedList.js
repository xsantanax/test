const mergeSortedLinkedList = (head1, head2) => {
  if (!head1) return head2;
  if (!head2) return head1;
  let head = null;
  let current = null;
  while (head1 && head2) {
    if (head1.data < head2.data) {
      if (!head) {
        head = head1;
        current = head;
      } else {
        current.next = head1;
        current = current.next;
      }
      head1 = head1.next;
    } else {
      if (!head) {
        head = head2;
        current = head;
      } else {
        current.next = head2;
        current = current.next;
      }
      head2 = head2.next;
    }
  }
  if (head1) {
    current.next = head1;
  }
  if (head2) {
    current.next = head2;
  }
  return head;
};

const mergeLinkedList = (head1, head2) => {
  if (!head1) return head2;
  if (!head2) return head1;

  let head = null;
  let tail = null;

  while (head1 && head2) {
    if (head1.val < head2.val) {
      if (!head) {
        head = head1;
        tail = head;
      } else {
        tail.next = head1;
        tail = tail.next;
      }
      head1 = head1.next;
    } else {
      if (!head) {
        head = head2;
        tail = head;
      } else {
        tail.next = head2;
        tail = tail.next;
      }
      head2 = head2.next;
    }
  }

  if (head1) {
    tail.next = head1;
  } else if (head2) {
    tail.next = head2;
  }

  return head;
};
