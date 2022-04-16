def level_order_traversal(root):
    if root is None:
        return
    data = []
    queue = [root]
    while queue:
        node = queue.pop(0)
        data.append(node.data)

        # print(node.data)
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)

    return data

