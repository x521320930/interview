// #### 两数之和

// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

// 你可以按任意顺序返回答案。

const nums = [3,2,4]

const tag = 6

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = []
    map[nums[0]] = 0
    for (let i = 1; i < nums.length;i++) {
      const val = target - nums[i]
      if (map[val] !== undefined) return [map[val], i]
      map[nums[i]] = i
    }
  };