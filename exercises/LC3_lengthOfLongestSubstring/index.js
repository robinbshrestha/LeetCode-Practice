// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

// Brute force = 3 for loops

// O(n) using sliding window
// 1.  sliding window will represent the current substring of non repeating characters we're on
// 2.  we are NOT working with sliding window of fixed size
//      --> sliding window will grow/shrink in size as we iterate through the string
// 3.  current index and value in for loop will always be the end of the sliding window.
//      --> as the end of sliding window increases, we increase start of window
// 4.  use hashtable to update input string with characters

// PSEUDOCODE
// 1.  create an empty hashmap (key/val --> character/index)
// 2.  create start and max variable and set both to zero initally
// 3.  Loop through input string
//      a) if current character in hashmap and index >= start
//          --> set start to the index of the character found in hashmap + 1 (in front of the last A)
//      b) set key/value pair on hashmap to be current character/current index (A = 3)
//      c) if length of current window is greater than max
//          --> set max to length of current window
// 4.  return max

//  Complexity analysis
//  Time: O(n) - each character of the string needs to be visited once

//  Space Complexity: O(min(m,n))
//  the number of keys in hash maps is bound by
//      1.  the size of string n
//      2.  the size of charset/alphabet m

 
function lengthOfLongestSubstring(s) {
let windowCharsMap = {};
let windowStart = 0;
let maxLength = 0; 

for (let i = 0; i < s.length; i++) {
    const endChar = s[i];

        if (windowCharsMap[endChar] >= windowStart) {
            windowStart = windowCharsMap[endChar] + 1;
        }

        windowCharsMap[endChar] = i;
        maxLength = Math.max(maxLength, i - windowStart + 1);
    }
    return maxLength;
}

module.exports = lengthOfLongestSubstring;
