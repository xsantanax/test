class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        #join arrays into unique sorted array
        m = len(nums1)
        n = len(nums2)
        itrm = 0
        itrn = 0
        finalArr = []
        
        #check for empty inputs
        if(len(nums1) == 0):
            finalArr = nums2            
        elif (len(nums2) == 0):
            finalArr = nums1
        else:
            #no empty inputs, 
            for x in range(m+n):
                if(itrm==m):
                    #first array completed, extend remaining els from other array
                    finalArr.extend(nums2[itrn:len(nums2)])
                    break
                if(itrn==n):
                    #2nd array completed, extend remaining els from other array
                    finalArr.extend(nums1[itrm:len(nums1)])
                    break
                if(nums1[itrm]<=nums2[itrn]):
                    finalArr.append(nums1[itrm])
                    itrm += 1
                else:
                    finalArr.append(nums2[itrn])
                    itrn += 1   
                        
        # print(finalArr)
        
        #get the middle element
        middleIndex = len(finalArr)/2
        print(finalArr)
        
        if(len(finalArr)%2==0):
            firstIndex = int(len(finalArr)/2) -1
            secondIndex = int(len(finalArr)/2)
            return (finalArr[firstIndex] + finalArr[secondIndex])/2
        
        else:   
            return finalArr[int(middleIndex)]