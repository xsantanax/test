class Solution:
    def reverse(self, x: int) -> int:
        intString = str(x)
        isNegative = False
        
        if x>2**31-1:
            return 0
        
        if x<-2**31:
            return 0
        
        if intString == '0':
            return 0
        
        if(intString[0] == "-"):
            #negative number, isolate -
            isNegative = True
            intString = intString[1:]
            
        
        #remove last zeroes
        size = len(intString)
        print('hi')
        print(intString[size-1])
        
        while(intString[size-1] == "0"):
            size -= 1
            intString = intString[0:size]
        
        size = len(intString)
        reversedString = ""
        
        for i in range(size, 0, -1):
            reversedString += intString[i-1]
        
        if(isNegative == True):
            reversedString = "-" + reversedString
        
        
        print(reversedString)
        return reversedString
