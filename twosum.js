const twosum = (nums, target) => {
  const map = new Map();
  //   console.log("map", map);

  for (let i = 0; i < nums.length; i++) {
    console.log("map", map);

    console.log(target - nums[i]);
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
    // console.log("map", map);
  }
};
twosum([3, 5, -4, 8, 11, 1, -1, 6], 10);
