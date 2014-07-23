'use strict';

describe('A suite', function() {

  var tree;
  var list;

  beforeEach(function() {
    tree = new Tree();
    list = [6, 7, 8, 9, 1, 2, 3, 4, 5];
    for (var i = 0; i < list.length; i++) {
      tree.insert(list[i]);
    }
  });

  it('insert binary tree', function() {
    // root
    expect(tree.root).not.toBe(null);
    expect(tree.root.number).toBe(6);

    // root.left
    expect(tree.root.left).toBe(tree.list[4]);
    expect(tree.root.left.number).toBe(1);

    // root.right
    expect(tree.root.right).toBe(tree.list[1]);
    expect(tree.root.right.number).toBe(7);
  });
});
