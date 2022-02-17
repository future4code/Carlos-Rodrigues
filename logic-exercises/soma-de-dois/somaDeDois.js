const sumOfTwo = (nums, target) => {
  const index = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        index.push(nums.indexOf(nums[i]));
        index.push(nums.indexOf(nums[j]));
        return index;
      }
    }
  }
};

sumOfTwo([4, 5, 10, 12, 21], 17);
